import { StrictMode } from "react";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App.jsx";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";

describe("portfolio", () => {
  it("renders the existing content, local logos and case studies in React", () => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
    const { container } = render(<StrictMode><App /></StrictMode>);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain("Jordan.");
    expect(container.querySelector(".hero-role").textContent).toBe("TECHNICAL LEAD / SENIOR ENGINEER");
    expect(screen.getByRole("link", { name: /CV \/ 2026/ }).getAttribute("href")).toBe("/cv.html");
    expect(container.querySelectorAll(".project details")).toHaveLength(4);
    expect(container.querySelectorAll(".leadership-skills li")).toHaveLength(6);
    const logos = container.querySelectorAll(".skill img");
    expect(logos).toHaveLength(10);
    for (const logo of logos) expect(logo.getAttribute("src")).toMatch(/^\/assets\/logos\/.+\.svg$/);
    expect(screen.queryByRole("button", { name: /pause|play/i })).toBeNull();
  });

  it("updates the active navigation link after scrolling", () => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
    let offset = 0;
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(function () {
      const positions = { home: 0, about: 800, projects: 1800, contact: 4000 };
      return { top: (positions[this.id] ?? 0) - offset };
    });
    let callback;
    vi.stubGlobal("requestAnimationFrame", vi.fn((next) => { callback = next; return 1; }));
    render(<App />);
    const nav = within(screen.getByRole("navigation"));
    expect(nav.getByRole("link", { name: "Home" }).getAttribute("aria-current")).toBe("location");
    offset = 1700;
    fireEvent.scroll(window);
    act(() => callback());
    expect(nav.getByRole("link", { name: "Projects" }).getAttribute("aria-current")).toBe("location");
    expect(nav.getByRole("link", { name: "Home" }).hasAttribute("aria-current")).toBe(false);
  });
});

describe("contact draft", () => {
  it("previews plain text and prepares an encoded email only after submission", () => {
    render(<Contact />);
    const name = screen.getByLabelText("Name");
    const email = screen.getByLabelText("Email");
    const message = screen.getByLabelText("Message");
    fireEvent.input(name, { target: { value: "  Alex & Sam  " } });
    fireEvent.input(email, { target: { value: "alex@example.com" } });
    fireEvent.input(message, { target: { value: '  <script>alert("hello")</script> & more  ' } });
    expect(screen.queryByRole("link", { name: /Open email draft/ })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /Prepare email/ }));
    const link = screen.getByRole("link", { name: /Open email draft/ });
    const url = new URL(link.href);
    expect(url.pathname).toBe("jordan@jordanhaigh.dev");
    expect(url.searchParams.get("subject")).toBe("Website enquiry from Alex & Sam");
    expect(url.searchParams.get("body")).toBe('<script>alert("hello")</script> & more\n\nFrom: Alex & Sam\nReply to: alex@example.com');
    expect(document.getElementById("preview-body").children).toHaveLength(0);
    expect(document.activeElement.id).toBe("message-preview");
    fireEvent.input(message, { target: { value: "Updated message" } });
    expect(screen.queryByRole("link", { name: /Open email draft/ })).toBeNull();
  });

  it("rejects whitespace-only fields and invalid email addresses", () => {
    render(<Contact />);
    const name = screen.getByLabelText("Name");
    const email = screen.getByLabelText("Email");
    fireEvent.input(name, { target: { value: "   " } });
    fireEvent.input(email, { target: { value: "invalid" } });
    fireEvent.input(screen.getByLabelText("Message"), { target: { value: "Hello" } });
    expect(name.checkValidity()).toBe(false);
    expect(email.checkValidity()).toBe(false);
    fireEvent.click(screen.getByRole("button", { name: /Prepare email/ }));
    expect(screen.queryByRole("link", { name: /Open email draft/ })).toBeNull();
    fireEvent.input(name, { target: { value: "Alex" } });
    expect(name.checkValidity()).toBe(true);
  });
});

describe("animation lifecycle", () => {
  function mockAnimation(reduced = false) {
    const context = Object.fromEntries(["setTransform", "clearRect", "beginPath", "moveTo", "lineTo", "stroke", "arc", "fill"].map((name) => [name, vi.fn()]));
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(context);
    const media = new EventTarget();
    media.matches = reduced;
    vi.stubGlobal("matchMedia", () => media);
    const frames = new Map();
    let frameId = 0;
    vi.stubGlobal("requestAnimationFrame", vi.fn((callback) => { frames.set(++frameId, callback); return frameId; }));
    vi.stubGlobal("cancelAnimationFrame", vi.fn((id) => frames.delete(id)));
    return { frames, media, context };
  }

  it("keeps one animation loop under Strict Mode and cleans up on unmount", () => {
    const { frames, media } = mockAnimation();
    const { unmount } = render(<StrictMode><Hero /></StrictMode>);
    expect(frames.size).toBe(1);
    unmount();
    expect(frames.size).toBe(0);
    media.dispatchEvent(new Event("change"));
    document.dispatchEvent(new Event("visibilitychange"));
    expect(frames.size).toBe(0);
  });

  it("respects changes to reduced-motion preferences", () => {
    const { frames, media, context } = mockAnimation(true);
    render(<Hero />);
    expect(context.clearRect).toHaveBeenCalled();
    expect(frames.size).toBe(0);
    media.matches = false;
    media.dispatchEvent(new Event("change"));
    expect(frames.size).toBe(1);
    media.matches = true;
    media.dispatchEvent(new Event("change"));
    expect(frames.size).toBe(0);
  });

  it("labels and highlights a constellation on hover, including with reduced motion", () => {
    const { context, frames } = mockAnimation(true);
    vi.spyOn(HTMLCanvasElement.prototype, "clientWidth", "get").mockReturnValue(1200);
    vi.spyOn(HTMLCanvasElement.prototype, "clientHeight", "get").mockReturnValue(800);
    const strokes = [];
    Object.defineProperty(context, "strokeStyle", { configurable: true, set: (value) => strokes.push(value) });
    const { container } = render(<Hero />);
    const canvas = container.querySelector("canvas");
    const infoPanel = container.querySelector(".constellation-info");
    // The first drawn segment starts at a star in Crux. Use its rendered
    // position to exercise hit testing rather than duplicating projection math.
    const [clientX, clientY] = context.moveTo.mock.calls[0];
    function move(target, x, y) {
      const event = new Event("pointermove", { bubbles: true });
      Object.assign(event, { pointerType: "mouse", clientX: x, clientY: y });
      fireEvent(target, event);
    }
    move(canvas, clientX, clientY);
    expect(infoPanel.dataset.visible).toBe("true");
    expect(infoPanel.querySelector("[data-constellation-name]").textContent).toBe("Crux");
    expect(infoPanel.querySelector("[data-constellation-meaning]").textContent).toBe("Southern Cross");
    expect(strokes).toContain("rgba(255, 139, 151, 0.95)");
    expect(infoPanel.style.transform).toBe("");
    expect(container.querySelector(".constellation-tooltip")).toBeNull();
    expect(frames.size).toBe(0);
    // Text above the canvas still permits constellation hover through it.
    move(screen.getByRole("heading", { level: 1 }), clientX, clientY);
    expect(infoPanel.dataset.visible).toBe("true");
    expect(infoPanel.querySelector("[data-constellation-name]").textContent).toBe("Crux");
    move(container.querySelector(".hero-role"), clientX, clientY);
    expect(infoPanel.dataset.visible).toBe("true");
    move(screen.getByRole("link", { name: /View my work/ }), clientX, clientY);
    expect(infoPanel.dataset.visible).toBe("false");
    move(canvas, clientX, clientY);
    fireEvent.pointerLeave(container.querySelector(".hero"));
    expect(infoPanel.dataset.visible).toBe("false");
    move(canvas, clientX, clientY);
    fireEvent.scroll(window);
    expect(infoPanel.dataset.visible).toBe("false");
    move(canvas, 0, 0);
    expect(infoPanel.dataset.visible).toBe("false");
  });
});
