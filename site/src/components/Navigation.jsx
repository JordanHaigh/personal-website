import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frame = null;
    function updateNavigation() {
      frame = null;
      const marker = Math.min(window.innerHeight * 0.35, 250);
      let current = "home";
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) current = id;
      }
      setActiveSection(current);
    }
    function scheduleUpdate() {
      if (frame === null) frame = requestAnimationFrame(updateNavigation);
    }
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    updateNavigation();
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <nav className="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a className="wordmark" href="#home" aria-label="Jordan Haigh home">J<span>H</span><span className="wordmark-dot">.</span></a>
        <div className="nav-links">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="/cv.html">CV</a>
        </div>
      </div>
    </nav>
  );
}
