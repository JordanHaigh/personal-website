import { useEffect, useRef } from "react";
import { startParticles } from "../particles.js";

export default function Hero() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  useEffect(() => startParticles(canvasRef.current, heroRef.current), []);
  return (
    <header ref={heroRef} className="hero" id="home">
      <canvas ref={canvasRef} id="particles" aria-hidden="true"></canvas>
      <div className="hero-content">
        <h1>Hello, I'm <span>Jordan.</span><br /><span className="hero-subtitle">I'm a full-stack engineer.</span></h1>
        <p className="hero-role">TECHNICAL LEAD <span aria-hidden="true">/</span> SENIOR ENGINEER</p>
        <a className="hero-button" href="#projects">View my work <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16m-7-7 7 7 7-7"/></svg></a>
      </div>
      <div className="hero-bottom"><a href="#about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a><span>PORTFOLIO / 2026</span></div>
    </header>
  );
}
