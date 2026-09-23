import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import CV from "./CV.jsx";

it("provides a readable CV with experience, contact details and a direct PDF download", () => {
  render(<CV />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Jordan Haigh.");
  expect(screen.getAllByRole("article")).toHaveLength(6);
  expect(screen.getByRole("heading", { name: "Skills & leadership" })).toBeTruthy();
  expect(screen.getByRole("heading", { name: "Education", exact: true })).toBeTruthy();
  expect(screen.getByRole("link", { name: "jordan@jordanhaigh.dev" }).getAttribute("href")).toBe("mailto:jordan@jordanhaigh.dev");
  expect(screen.getByRole("link", { name: "Back to portfolio", exact: true }).getAttribute("href")).toBe("/");
  expect(screen.getByText(/programme concluded before production release/)).toBeTruthy();
  const download = screen.getByRole("link", { name: "Download PDF" });
  expect(download.getAttribute("href")).toBe("/Jordan-Haigh-CV.pdf");
  expect(download.getAttribute("download")).toBe("Jordan-Haigh-CV.pdf");
  expect(screen.queryByRole("button", { name: /Print/ })).toBeNull();
});
