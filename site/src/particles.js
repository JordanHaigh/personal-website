// A bounded particle count and capped pixel ratio keep mobile rendering light.
export function startParticles(canvas, hero) {
  const context = canvas.getContext("2d");
  if (!context) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let paused = reducedMotion.matches;
  let visible = true;
  let frame = null;
  let previousTime = null;
  let elapsed = 0;
  let width = 0;
  let height = 0;
  let particles = [];
  let pointer = { x: 0, y: 0 };
  let rotation = { x: 0, y: 0 };
  let seed = 27;
  function random() {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  }
  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    seed = 27;
    const count = width < 600 ? 115 : 185;
    particles = Array.from({ length: count }, () => ({
      angle: random() * Math.PI * 2,
      radius: 0.52 + random() * 0.49,
      depth: (random() - 0.5) * 0.9,
      offset: random() * Math.PI * 2,
      size: 0.65 + random() * 1.1,
    }));
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    const radius = Math.min(width * 0.4, height * 0.43, 370);
    const turn = elapsed * 0.07 + rotation.x;
    const tilt = 0.28 + Math.sin(elapsed * 0.11) * 0.2 + rotation.y;
    const cos = Math.cos(turn), sin = Math.sin(turn);
    const cosTilt = Math.cos(tilt), sinTilt = Math.sin(tilt);
    const projected = particles.map((particle) => {
      const angle = particle.angle + Math.sin(elapsed * 0.18 + particle.offset) * 0.07;
      const x = Math.cos(angle) * particle.radius;
      const y = Math.sin(angle) * particle.radius;
      const z = particle.depth;
      const turnedX = x * cos - z * sin;
      const turnedZ = x * sin + z * cos;
      const tiltedY = y * cosTilt - turnedZ * sinTilt;
      const depth = y * sinTilt + turnedZ * cosTilt;
      const scale = 2.8 / (2.8 + depth);
      return { x: width / 2 + turnedX * radius * scale, y: height / 2 + tiltedY * radius * scale - 12, depth, size: particle.size };
    });
    const distanceLimit = radius * 0.29;
    for (let i = 0; i < projected.length; i++) {
      const a = projected[i];
      for (let j = i + 1; j < projected.length; j++) {
        const b = projected[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < distanceLimit && Math.abs(a.depth - b.depth) < 0.55) {
          const opacity = (1 - distance / distanceLimit) * 0.36;
          context.strokeStyle = "rgba(103, 143, 216, " + opacity + ")";
          context.lineWidth = 0.7;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }
      context.fillStyle = "rgba(117, 156, 229, " + (0.3 + (1 - a.depth) * 0.17) + ")";
      context.beginPath();
      context.arc(a.x, a.y, a.size, 0, Math.PI * 2);
      context.fill();
    }
  }
  function tick(time) {
    frame = null;
    if (paused || !visible || document.hidden) { previousTime = null; return; }
    elapsed += previousTime === null ? 0 : Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    rotation.x += (pointer.x - rotation.x) * 0.035;
    rotation.y += (pointer.y - rotation.y) * 0.035;
    draw();
    frame = requestAnimationFrame(tick);
  }
  function updateAnimation() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    previousTime = null;
    if (!paused && visible && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function onMotionChange() { paused = reducedMotion.matches; updateAnimation(); }
  reducedMotion.addEventListener("change", onMotionChange);
  document.addEventListener("visibilitychange", updateAnimation);
  function onPointerMove(event) {
    if (event.pointerType !== "mouse" || paused) return;
    pointer = { x: (event.clientX / width - 0.5) * 0.3, y: (event.clientY / height - 0.5) * 0.25 };
  }
  function onPointerLeave() { pointer = { x: 0, y: 0 }; }
  hero.addEventListener("pointermove", onPointerMove, { passive: true });
  hero.addEventListener("pointerleave", onPointerLeave);
  let observer;
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updateAnimation();
    });
    observer.observe(canvas);
  }
  window.addEventListener("resize", resize, { passive: true });
  resize();
  updateAnimation();
  return () => {
    if (frame !== null) cancelAnimationFrame(frame);
    observer?.disconnect();
    reducedMotion.removeEventListener("change", onMotionChange);
    document.removeEventListener("visibilitychange", updateAnimation);
    hero.removeEventListener("pointermove", onPointerMove);
    hero.removeEventListener("pointerleave", onPointerLeave);
    window.removeEventListener("resize", resize);
  };
}
