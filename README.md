# Personal website

A dark, responsive React portfolio for **jordanhaigh.dev**, hosted on **GitHub Pages** with a custom domain. Vite provides Fast Refresh during development and builds the static site, including the downloadable CV. No application server is needed in production.

- `site/index.html` — page metadata and React entry point.
- `site/cv.html` — dedicated professional CV page, linked from the home screen.
- `site/src/components/CV.jsx` and `site/src/cv.css` — CV page and responsive/print layouts.
- `site/src/cv-data.js` — shared content for the HTML CV and downloadable PDF.
- `scripts/build-cv-pdf.mjs` — creates the PDF with embedded local fonts during development startup and production builds.
- `site/src/App.jsx` — page composition.
- `site/src/components/` — hero, navigation, about/toolkit, projects, contact and footer components.
- `site/src/styles.css` — responsive layout, typography, and original project illustrations.
- `site/src/particles.js` — particle renderer, with cleanup for React updates.
- `site/public/` — locally hosted fonts, technology logos, licenses, favicon, robots.txt and sitemap.
- `site/404.html` — matching error page.
- `site/public/CNAME` — records the intended custom domain, `jordanhaigh.dev`.
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages only when you click **Run workflow**.

## Preview locally

Use Node.js 24 LTS (`nvm use` if you use nvm). Node 20.19+ and 22.12+ are also supported; odd-numbered releases are not supported by the test runner.

```sh
npm ci
npm run dev
```

Open <http://localhost:8000>. CSS changes update immediately and React components use Fast Refresh, preserving local state where possible. HTML changes reload the page. `npm start` is an alias for the same server. Stop it with Ctrl+C.

If the old Python preview server is still running, stop it first so port 8000 is available. Vite reports a port conflict instead of silently moving to another port. When switching from the Python server, refresh any already-open preview tab once to load Vite's live-reload client.

To test and preview the production build:

```sh
npm test
npm run build
npm run preview
```

The production preview opens at <http://localhost:4173>. Build output goes to `dist/`, including a standalone `404.html`. The manual GitHub workflow installs dependencies, runs tests, builds the app, and uploads `dist/` as a GitHub Pages artifact. Assets in `site/public/` are copied unchanged; application JavaScript and CSS get hashed filenames. Neither dependencies nor source/test files are deployed.

## Portfolio content

The homepage and CV include Open Graph and Twitter Card metadata for link previews. Both use the committed 1200 × 630 image at `site/public/assets/social-preview.png`, with a separate title and description for the CV. To regenerate the card, install Pillow in a Python environment (`python3 -m pip install Pillow`) and run `python3 scripts/build-social-preview.py`. Normal website builds copy the image without requiring Python. After deploying changes, use [Meta's Sharing Debugger](https://developers.facebook.com/tools/debug/) to inspect the URL and request a fresh scrape if Meta still shows an old preview.

The home screen's **CV / 2026** link opens `/cv`. This separate React entry is built as `cv.html`; GitHub Pages serves it at the extensionless `/cv` URL, so direct visits and refreshes work without a routing fallback. The old `/cv.html` address also remains available. It uses the old CV’s sidebar layout as a reference, styled with the portfolio’s charcoal background, Montserrat font and blue/coral accents. Content comes from the NGM Starter profile, with anonymous client/employer descriptions, skills, leadership and education. Visitors can use **Download PDF** to save a clean, selectable-text CV with a light background and no browser-generated URL, timestamp or page-title headers. HTML and PDF content both come from `site/src/cv-data.js`; keep its contact details in sync with the portfolio. `npm run dev` and `npm run build` generate `site/public/Jordan-Haigh-CV.pdf` using PDFKit, and Vite includes it in `dist/`. The generated PDF is not committed. After editing CV content during an existing dev session, run `npm run build:cv` to refresh the download.

The design follows the visual direction of [benscott.dev](https://benscott.dev/), with an original implementation and illustrations. The biography, skills, education and four case studies are based on Jordan's supplied professional profile. The two supplied PDFs were identical.

Client work is presented anonymously, with client and employer names and detailed commercial metrics omitted. Case studies cover cloud transformation, insurance processing, enterprise SaaS and rail/geospatial data. The cloud-transformation case study explicitly notes that the programme ended before production release; it does not claim measured production results.

Update content in `site/src/components/`: `Hero.jsx` for the introduction, `About.jsx` for the biography and toolkit, and `Projects.jsx` for case studies. The NGM Starter profile is the source of truth. The profile photo loads directly from LinkedIn's CDN using `linkedInPhotoUrl` in `ProfilePortrait.jsx`, with a circular blue-to-coral border. If the request fails (including an expired CDN URL), the original gradient SVG in `ProfileFallback.jsx` appears automatically. No copy of the photo is stored in the repository; project visuals are labeled concept illustrations, not screenshots or evidence of actual product interfaces. The original PDFs are not included in the website or offered for download.

Contact uses **jordan@jordanhaigh.dev**. Visitors can email directly, or complete the form to prepare and review a draft locally. **Open email draft** opens their email application; they send the email themselves. There is no backend form delivery, network submission or storage of form data. If changing the address, update `contactEmail` in `site/src/components/Contact.jsx` and the no-JavaScript fallback in `site/index.html`.

The animated background respects reduced-motion preferences and stops rendering when off-screen or in a hidden tab. React requires JavaScript; a fallback provides direct email and GitHub links when JavaScript is disabled. The 404 page works without JavaScript. Fonts and technology logos are served locally; the profile photo loads from LinkedIn with a built-in SVG fallback.

Toolkit logos come from [Devicon](https://github.com/devicons/devicon) and the official [.NET brand repository](https://github.com/dotnet/brand). Original SVGs, attribution and the Devicon license are in `site/public/assets/logos/`. The AWS tile uses Devicon’s orange wordmark on a transparent background.

## One-time GitHub Pages setup

**Squarespace manages the domain registration and DNS. GitHub Pages hosts the website and manages HTTPS.** These are the only two services needed for this setup.

### 1. Enable Pages and set the custom domain

1. Open [this repository's Pages settings](https://github.com/JordanHaigh/personal-website/settings/pages).
2. Under **Build and deployment → Source**, select **GitHub Actions**. The repository must have GitHub Pages available under your GitHub plan; public repositories support Pages on GitHub Free.
3. Under **Custom domain**, enter `jordanhaigh.dev` and save it **before changing DNS**. If this field is not available until the first deployment, run the workflow once, then return to set the custom domain before proceeding to step 2 below.
4. Under **Settings → Environments → github-pages**, restrict deployment branches to the default branch (`master`). GitHub may create this environment automatically when Pages is enabled or first deployed.

The workflow uses GitHub's built-in token and the `github-pages` environment. It needs no manually created token, secret or environment variable. The previous `production` environment and AWS variables are not used.

The `CNAME` file is copied into the build, but **custom Actions deployments require the domain to be configured in Pages settings**; that file alone does not configure the domain. The workflow reads the site path from GitHub Pages and passes it to Vite as `SITE_BASE_PATH`. Assets, local navigation and the PDF download work at both `https://jordanhaigh.github.io/personal-website/` and the custom-domain root. After adding or removing the custom domain in Pages settings, run the workflow again to rebuild for the new path. See [GitHub's custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [publishing-source settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### 2. Configure DNS in Squarespace

Open the Squarespace domains dashboard, select **jordanhaigh.dev**, then open **DNS → Domain Nameservers**. Use **Squarespace nameservers**. If you never changed them, leave them as they are.

If you already switched to Route 53, first copy any email and other required DNS records into Squarespace and prepare the GitHub Pages records below. Then choose **Use Squarespace nameservers**, complete the authentication prompt, and save. Follow Squarespace's prompts for DNSSEC when resetting. Allow up to 48 hours for the nameserver change; keep the old hosted zone until the change has propagated and the website and email work. See [Squarespace's nameserver reset instructions](https://support.squarespace.com/hc/en-us/articles/4404183898125-Review-change-or-reset-your-domain-s-nameservers).

To check the current nameservers, run `dig NS jordanhaigh.dev +short`. Compare them with the defaults shown in Squarespace.

In Squarespace's **DNS settings → Custom records**, add the following records. Use `@` for the root domain. See [Squarespace's DNS editor guide](https://support.squarespace.com/hc/en-us/articles/360002101888-Edit-your-domain-s-DNS-records).

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `jordanhaigh.github.io` |

Replace the old website A/AAAA/alias records at the root and conflicting records for `www`. Preserve email records, including MX, SPF, DKIM and DMARC, and unrelated TXT records. The `www` target is the GitHub account hostname, with no repository path or `https://` prefix.

IPv6 is optional. If using AAAA records, use all four GitHub Pages addresses: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, and `2606:50c0:8003::153`. Remove stale AAAA records pointing to the old host if you are not configuring IPv6.

These addresses come from [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). GitHub redirects `www.jordanhaigh.dev` to the configured root domain once both are correctly set up. Optionally verify ownership under your GitHub account's **Settings → Pages** using GitHub's supplied TXT record.

### 3. Enable HTTPS

Wait for the DNS check to pass in **Settings → Pages**, then select **Enforce HTTPS** when available. DNS changes and certificate issuance can take time; GitHub manages the certificate automatically. You do not need an ACM certificate or a regional hosting stack. See [GitHub's HTTPS setup guide](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

## Deploy the website

1. Commit and push the changes to `master`.
2. Open **Actions → Deploy website → Run workflow**.
3. Select `master` and click **Run workflow**. Other branches are skipped.
4. The build job installs dependencies, runs tests, generates the CV PDF, builds the site and uploads `dist/`. The deployment job publishes that artifact to GitHub Pages.
5. After the workflow succeeds and DNS is ready, check [the website](https://jordanhaigh.dev/), [the HTML CV](https://jordanhaigh.dev/cv), and [the PDF download](https://jordanhaigh.dev/Jordan-Haigh-CV.pdf).

Pushes and pull requests do not trigger deployment. To roll back, revert the relevant commit, push, and manually run the workflow again.

### If the page is blank and assets return 404

A project Pages URL uses `/personal-website/`, whereas the custom domain uses `/`. The workflow obtains this path from `configure-pages` before building. Commit and push any path fixes, then start a **new workflow run**; rerunning an older run uses its old commit. The browser's Permissions-Policy warning is separate from missing JavaScript/CSS files.

To check a project-path build locally, run `SITE_BASE_PATH=/personal-website/ npm run build`, then `SITE_BASE_PATH=/personal-website/ npm run preview` and open `http://localhost:4173/personal-website/`. Normal local development defaults to `/`.

### If deployment says “Get Pages site failed: Not Found”

Open [Settings → Pages](https://github.com/JordanHaigh/personal-website/settings/pages) and select **GitHub Actions** under **Build and deployment → Source**. Save if prompted, then rerun the workflow. This enables the Pages site that `configure-pages` looks up. If Pages settings are unavailable, check repository administrator access and whether your GitHub plan supports Pages for the repository's visibility.

The workflow uses Node 24 and current Pages actions. A Node 20 deprecation warning is separate from this missing-site error; do not enable `ACTIONS_ALLOW_USE_UNSECURE_NODE_VERSION`. The action's `enablement: true` option needs a separate privileged token, so this workflow uses the one-time settings step instead. See [configure-pages inputs](https://github.com/actions/configure-pages/blob/v6/action.yml).

## Remove the previous AWS setup

The AWS templates have been removed from this repository. The deployment workflow only uses GitHub Pages.

If you created AWS resources, they still exist in your account. After Squarespace's nameservers are active and the website and email work, remove the old website's CloudFormation stacks and unused resources. The previous templates retain S3 buckets, the Route 53 hosted zone and any created GitHub OIDC provider when stacks are deleted, so review those separately. Do not remove an OIDC provider shared by another project. You can also remove the unused AWS variables from GitHub's old `production` environment. No AWS account changes have been made by this repository update.
