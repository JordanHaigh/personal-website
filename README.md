# Personal website

A fresh static site for **jordanhaigh.dev**, prepared for AWS hosting. Edit the files in `site/`; there are no dependencies or build step.

- `site/` — the website and a 404 page.
- `infrastructure/dns.yml` — creates a Route 53 hosted zone if you need one.
- `infrastructure/website.yml` — creates a private S3 bucket, CloudFront distribution, HTTPS certificate, root and `www` DNS records, and the GitHub deployment role.
- `.github/workflows/deploy.yml` — deploys only when you click **Run workflow** in GitHub.

## Preview locally

```sh
python3 -m http.server 8000 --directory site
```

Open <http://localhost:8000>. Stop the server with Ctrl+C.

## One-time AWS setup

You need an AWS account and access to your Squarespace Domains account. Your domain stays registered and renewed with Squarespace; Route 53 will manage its DNS, and AWS will host the website. No domain transfer is needed. Creating these AWS resources incurs charges.

The steps below use the AWS web console, so you do not need to install the AWS CLI. Both templates default to `jordanhaigh.dev`.

### 1. Connect the domain to Route 53

If your domain already has an authoritative **public** hosted zone in Route 53 in this AWS account, use that zone's ID and skip creating another zone. A domain registered with AWS may already have one. Check that the domain's nameservers match the zone's four NS values.

Otherwise:

1. Open [CloudFormation in US East (N. Virginia)](https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1). Choose **Create stack → With new resources (standard)**.
2. Choose **Choose an existing template → Upload a template file** and upload `infrastructure/dns.yml`.
3. Name the stack `personal-website-dns`. Keep `DomainName` set to `jordanhaigh.dev`.
4. Keep the other defaults and create the stack. Once it says **CREATE_COMPLETE**, open its **Outputs** tab.
5. Copy `HostedZoneId` for the next step. `NameServers` contains four comma-separated nameservers.
6. In your **Squarespace domains dashboard**, select your domain, then open **DNS → Domain Nameservers → Use Custom Nameservers**. Complete the password or two-factor authentication prompt and, if prompted, disable the old DNSSEC configuration. Enter all four Route 53 nameservers from the stack output, one per field, and save. Use the nameserver setting, rather than adding NS records under custom DNS records. See [Squarespace's nameserver instructions](https://support.squarespace.com/hc/en-us/articles/4404183898125-Review-change-or-reset-your-domain-s-nameservers).
7. Wait for the nameserver change to propagate before continuing. This can take up to 48 hours. You can check with `dig NS jordanhaigh.dev +short`; the result should match the four new nameservers.

If the domain already provides email or other services, copy their DNS records (including MX and TXT records) into the new hosted zone before changing nameservers. If DNSSEC is enabled at the registrar, remove the old DS record before switching DNS providers; otherwise DNS resolution can fail.

### 2. Create the hosting

1. In **IAM → Identity providers**, check whether `token.actions.githubusercontent.com` already exists. If so, copy its ARN for the parameter below. Otherwise, the template will create it.
2. In the same **US East (N. Virginia) / us-east-1** CloudFormation console, create another stack and upload `infrastructure/website.yml`. Use this region because CloudFront requires its HTTPS certificate there.
3. Name the stack `personal-website`. Fill in:

   | Parameter | Value |
   | --- | --- |
   | `DomainName` | `jordanhaigh.dev` (already the default) |
   | `HostedZoneId` | The authoritative public hosted zone ID from step 1 |
   | `GitHubRepository` | `JordanHaigh/personal-website` (already the default) |
   | `ExistingGitHubOidcProviderArn` | Leave empty unless you found an existing provider |

4. Keep the other defaults. On the final page, acknowledge that CloudFormation may create IAM resources, then create the stack.
5. Wait for **CREATE_COMPLETE**. Certificate validation and CloudFront provisioning may take several minutes. If the certificate stays pending, check the nameservers from step 1 and ensure the hosted zone belongs to this AWS account.
6. Open the stack's **Outputs** tab. Keep it open for the GitHub configuration below.

The template configures both `https://jordanhaigh.dev` and `https://www.jordanhaigh.dev` to serve the site and redirects HTTP to HTTPS. The bucket stays private. The website will return an error until its first deployment uploads the files.

### 3. Connect GitHub to AWS

1. Commit and push this project to the repository's default branch (currently `master`). The workflow must be on the default branch for GitHub to show the manual run button.
2. In the GitHub repository, open **Settings → Environments → New environment**, and name it **`production`**, all lowercase.
3. Under **Deployment branches and tags**, choose **Selected branches and tags** and allow only the default branch (`master` for this repository). The AWS role trusts this repository's `production` environment.
4. Under that environment's **Environment variables**, add these values from the hosting stack's **Outputs**. Use variables, not secrets:

   | GitHub variable | CloudFormation output |
   | --- | --- |
   | `AWS_REGION` | `AwsRegion` |
   | `AWS_ROLE_ARN` | `DeploymentRoleArn` |
   | `S3_BUCKET` | `BucketName` |
   | `CLOUDFRONT_DISTRIBUTION_ID` | `CloudFrontDistributionId` |
   | `WEBSITE_URL` | `WebsiteUrl` |

GitHub uses short-lived OIDC credentials. No AWS access keys need to be created or saved. The role can upload/delete objects in only this website's bucket and invalidate only its CloudFront distribution.

The template defaults to the standard OIDC subject format for this older repository. If the repository has opted into GitHub's immutable OIDC subject format, or you move to a new repository using that format, set `GitHubRepository` to `OWNER@OWNER_ID/REPOSITORY@REPOSITORY_ID` when creating or updating the hosting stack. See [GitHub's AWS OIDC documentation](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws).

## Deploy the website

1. Commit and push your changes to the default branch.
2. Open **Actions → Deploy website → Run workflow** in GitHub.
3. Select the default branch and click **Run workflow**. Other branches are skipped.
4. Wait for the run to turn green, then visit your domain.

The workflow uploads `site/`, removes remote files absent from that folder, refreshes CloudFront, waits for the refresh, and checks that the website responds successfully. Pushes and pull requests do not trigger deployment. The generated S3 bucket is dedicated to this site; do not store unrelated files there.

To roll back site content, revert the relevant commit on the default branch, push, and run the workflow again. Deployments update S3 files in place rather than switching releases atomically; keep this in mind when adding a larger app later. Caching is disabled initially so the starter is easy to update.

## Infrastructure changes and removal

Site deployments do not update infrastructure. To change hosting settings, update the existing hosting stack with the edited template through CloudFormation.

Deleting the hosting stack removes the distribution, certificate, DNS records, and deployment role. The S3 bucket, hosted zone, and any OIDC provider created here are retained intentionally. Remove them separately only when no longer needed; retained resources may continue to incur charges. If re-creating the hosting stack, supply the retained OIDC provider's ARN instead of creating a duplicate.

Reference: [CloudFront access to private S3 origins](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) and [CloudFront certificate region requirements](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html).
