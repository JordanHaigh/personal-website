// Vite supplies / for a custom domain and /personal-website/ for project Pages.
export function siteUrl(path = "") {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
