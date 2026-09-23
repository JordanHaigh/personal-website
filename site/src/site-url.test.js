import { expect, it, vi } from "vitest";
import { siteUrl } from "./site-url.js";

it.each(["/", "/personal-website/"])("resolves local pages and assets under %s", (base) => {
  vi.stubEnv("BASE_URL", base);
  expect(siteUrl()).toBe(base);
  expect(siteUrl("cv")).toBe(`${base}cv`);
  expect(siteUrl("/Jordan-Haigh-CV.pdf")).toBe(`${base}Jordan-Haigh-CV.pdf`);
  expect(siteUrl("assets/logos/react.svg")).toBe(`${base}assets/logos/react.svg`);
});
