import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import ProfilePortrait from "./ProfilePortrait.jsx";

it("loads the LinkedIn image directly and falls back to the original SVG on error", () => {
  render(<ProfilePortrait />);
  const photo = screen.getByRole("img", { name: "Jordan Haigh" });
  expect(new URL(photo.src).hostname).toBe("media.licdn.com");
  const link = screen.getByRole("link", { name: "View Jordan Haigh’s LinkedIn profile" });
  expect(link.href).toBe("https://www.linkedin.com/in/jordanhaigh/");

  fireEvent.error(photo);

  expect(screen.queryByRole("img", { name: "Jordan Haigh" })).toBeNull();
  const fallback = within(link).getByRole("img", { name: "Profile illustration" });
  expect(fallback.tagName.toLowerCase()).toBe("svg");
  expect(fallback.querySelectorAll("path")).toHaveLength(2);
  expect(link.querySelector(".portrait-particles")).not.toBeNull();
});
