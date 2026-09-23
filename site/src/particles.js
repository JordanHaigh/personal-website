// Stylised southern-sky constellations on a rotating celestial sphere.
// These hand-drawn patterns are decorative, rather than an astronomical chart.
const constellations = [
  { // Cross
    name: "Crux", meaning: "Southern Cross",
    longitude: -0.95, latitude: -0.05, scale: 0.24,
    points: [[0, -0.8], [-0.5, -0.1], [0.46, 0], [0.05, 0.85], [0.28, 0.35]],
    links: [[0, 3], [1, 2]], bright: [0, 3],
  },
  { // Keel
    name: "Carina", meaning: "The Keel",
    longitude: 0.85, latitude: -0.55, scale: 0.28,
    points: [[-0.9, 0.15], [-0.5, -0.1], [-0.05, -0.65], [0.65, -0.45], [0.85, 0.15], [0.25, 0.4], [-0.4, 0.65]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 0]], bright: [0, 2, 4],
  },
  { // Sails
    name: "Vela", meaning: "The Sails",
    longitude: -0.75, latitude: 0.65, scale: 0.26,
    points: [[-0.8, -0.1], [-0.55, -0.65], [0.25, -0.8], [0.85, -0.05], [0.4, 0.65], [-0.3, 0.75]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], bright: [0, 3, 5],
  },
  { // Wolf
    name: "Lupus", meaning: "The Wolf",
    longitude: 0.9, latitude: 0.6, scale: 0.27,
    points: [[-0.6, -0.8], [-0.15, -0.5], [0.4, -0.85], [0.15, 0], [0.65, 0.4], [0.1, 0.85], [-0.7, -0.2], [-0.45, 0.35]],
    links: [[0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [5, 7], [7, 6], [6, 0], [6, 3]], bright: [0, 3, 5],
  },
  { // Southern triangle
    name: "Triangulum Australe", meaning: "Southern Triangle",
    longitude: 1.9, latitude: 0.05, scale: 0.25,
    points: [[0, -0.8], [-0.8, 0.55], [0.8, 0.55]],
    links: [[0, 1], [1, 2], [2, 0]], bright: [0, 1, 2],
  },
  { // Fly
    name: "Musca", meaning: "The Fly",
    longitude: -0.1, latitude: -0.95, scale: 0.21,
    points: [[-0.55, -0.6], [0.1, -0.15], [0.8, -0.55], [-0.25, 0.7], [0.4, 0.8], [0.35, 0.2]],
    links: [[0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [5, 1]], bright: [0, 1, 4],
  },
  { // Crow
    name: "Corvus", meaning: "The Crow",
    longitude: -2.3, latitude: 0.25, scale: 0.25,
    points: [[-0.5, -0.7], [0.55, -0.45], [0.7, 0.7], [-0.65, 0.8], [-0.85, 0.55]],
    links: [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4]], bright: [0, 1, 2],
  },
  { // A winding river
    name: "Eridanus", meaning: "The River",
    longitude: 2.95, latitude: -0.5, scale: 0.29,
    points: [[-0.8, -0.75], [-0.15, -0.8], [0.35, -0.35], [-0.3, 0], [-0.65, 0.4], [0, 0.65], [0.7, 0.45], [0.9, 0.9]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]], bright: [0, 3, 7],
  },
  {
    name: "Canis Major", meaning: "The Great Dog",
    longitude: -0.35, latitude: -0.45, scale: 0.24,
    points: [[0, -0.9], [0.3, -0.45], [-0.15, -0.1], [-0.65, 0.4], [-0.9, 0.65], [-0.1, 0.7], [0.55, 0.85], [0.7, 0.3]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 7], [7, 2]], bright: [1, 3, 6],
  },
  {
    name: "Puppis", meaning: "The Stern",
    longitude: 0.1, latitude: 0.5, scale: 0.25,
    points: [[-0.5, -0.9], [0.3, -0.65], [0.6, -0.05], [0.25, 0.35], [0.65, 0.85], [-0.25, 0.7], [-0.7, 0.1]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [6, 3]], bright: [0, 2, 5],
  },
  {
    name: "Ara", meaning: "The Altar",
    longitude: 1.6, latitude: -0.75, scale: 0.23,
    points: [[-0.65, -0.6], [0.15, -0.8], [0.6, -0.25], [0.7, 0.6], [-0.35, 0.8], [-0.4, 0]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 5]], bright: [1, 3, 4],
  },
  {
    name: "Phoenix", meaning: "The Phoenix",
    longitude: -1.65, latitude: -0.65, scale: 0.26,
    points: [[-0.7, -0.7], [-0.35, 0], [0.25, -0.4], [0.8, -0.45], [0.35, 0.3], [-0.1, 0.85], [-0.65, 0.55]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1], [1, 4]], bright: [0, 2, 5],
  },
  {
    name: "Centaurus", meaning: "The Centaur",
    longitude: 2.35, latitude: 0.75, scale: 0.28,
    points: [[-0.9, -0.5], [-0.4, -0.7], [0, -0.2], [0.55, -0.45], [0.8, 0.05], [0.3, 0.2], [0.55, 0.8], [-0.25, 0.6], [-0.55, 0.9]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 2], [5, 6], [2, 7], [7, 8]], bright: [1, 6, 8],
  },
  {
    name: "Grus", meaning: "The Crane",
    longitude: -2.7, latitude: -0.75, scale: 0.24,
    points: [[0.5, -0.85], [0, -0.4], [0.1, 0.2], [-0.45, 0.7], [0.5, 0.85], [-0.7, -0.2], [0.75, 0.15]],
    links: [[0, 1], [1, 2], [2, 3], [2, 4], [5, 2], [2, 6]], bright: [1, 2, 3],
  },
  {
    name: "Pavo", meaning: "The Peacock",
    longitude: 0.15, latitude: 1.1, scale: 0.24,
    points: [[-0.65, -0.7], [-0.1, 0], [0.3, -0.45], [0.8, -0.15], [0.65, 0.4], [0.1, 0.8], [-0.65, 0.4]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1], [1, 4]], bright: [0, 3, 5],
  },
  {
    name: "Cetus", meaning: "The Whale",
    longitude: -1.5, latitude: 0.4, scale: 0.27,
    points: [[-0.9, 0.1], [-0.5, 0.6], [0.2, 0.7], [0.65, 0.25], [0.25, -0.1], [0.3, -0.7], [0.85, -0.8], [1, -0.3]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [4, 5], [5, 6], [6, 7], [7, 4]], bright: [0, 2, 6],
  },
  {
    name: "Hydrus", meaning: "The Little Water Snake",
    longitude: 0.25, latitude: -0.05, scale: 0.23,
    points: [[-0.7, -0.65], [-0.2, -0.3], [0.5, 0.75], [-0.8, 0.25], [0.65, -0.6]],
    links: [[0, 1], [1, 2], [2, 3], [2, 4]], bright: [0, 2, 3],
  },
  {
    name: "Columba", meaning: "The Dove",
    longitude: 3.1, latitude: 0.3, scale: 0.25,
    points: [[-0.9, -0.5], [-0.4, -0.25], [0, 0], [0.5, -0.4], [0.85, -0.05], [-0.15, 0.8]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5]], bright: [0, 2, 3],
  },
];
export function startParticles(canvas, hero, infoPanel = null) {
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
  let stars = [];
  let surroundingStars = [];
  let connections = [];
  let hoverPoint = null;
  let hovered = null;
  const nameElement = infoPanel?.querySelector("[data-constellation-name]");
  const meaningElement = infoPanel?.querySelector("[data-constellation-meaning]");

  function updateInfoPanel(constellation) {
    if (!infoPanel || constellation === hovered) return;
    if (constellation) {
      nameElement.textContent = constellation.name;
      meaningElement.textContent = constellation.meaning;
    }
    // Keep the last name in place while CSS gently fades the panel out.
    infoPanel.dataset.visible = String(Boolean(constellation));
    infoPanel.setAttribute("aria-hidden", String(!constellation));
  }

  function distanceToSegment(point, a, b) {
    const dx = b.x - a.x, dy = b.y - a.y;
    const lengthSquared = dx * dx + dy * dy;
    const t = lengthSquared ? Math.max(0, Math.min(1, ((point.x - a.x) * dx + (point.y - a.y) * dy) / lengthSquared)) : 0;
    return Math.hypot(point.x - a.x - t * dx, point.y - a.y - t * dy);
  }

  function createConstellation() {
    let seed = 27;
    function random() {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    }
    stars = [];
    surroundingStars = [];
    connections = [];

    // Each small star map lies on its own tangent plane, so different
    // constellations turn towards and away from the viewer as the sky spins.
    for (const constellation of constellations) {
      const { longitude, latitude, scale, points, links, bright } = constellation;
      const start = stars.length;
      const sinLon = Math.sin(longitude), cosLon = Math.cos(longitude);
      const sinLat = Math.sin(latitude), cosLat = Math.cos(latitude);
      for (const [index, [px, py]] of points.entries()) {
        const x = px * scale, y = py * scale;
        const prominent = bright.includes(index);
        stars.push({
          x: 1.28 * sinLon * cosLat + x * cosLon - y * sinLat * sinLon,
          y: 1.28 * sinLat + y * cosLat,
          z: -1.28 * cosLon * cosLat + x * sinLon + y * sinLat * cosLon,
          size: prominent ? 1.7 + random() * 0.6 : 0.85 + random() * 0.45,
          brightness: prominent ? 0.85 : 0.6,
          phase: random() * Math.PI * 2,
          constellation,
          anchor: true,
          flare: prominent,
        });
      }
      for (const [from, to] of links) {
        connections.push({ from: start + from, to: start + to, opacity: 0.3, constellation });
      }
    }

    // Unconnected pinpoints add the scattered dust of a night sky.
    const backgroundCount = width < 600 ? 450 : 1000;
    for (let i = 0; i < backgroundCount; i++) {
      const longitude = random() * Math.PI * 2;
      const vertical = random() * 2 - 1;
      const horizontal = Math.sqrt(1 - vertical * vertical);
      const radius = 1.15 + random() * 0.6;
      stars.push({
        x: Math.cos(longitude) * horizontal * radius,
        y: vertical * radius,
        z: Math.sin(longitude) * horizontal * radius,
        size: 0.35 + random() ** 2 * 1.05,
        brightness: 0.18 + random() * 0.42,
        phase: random() * Math.PI * 2,
      });
    }

    // Preserve the original sphere's star count. Only add a sparse continuation
    // beyond it, blending into the edge before thinning toward distant corners.
    const sphereRadius = Math.max(1, Math.min(width * 0.3, height * 0.32, 290));
    const candidates = Math.min(12000, Math.ceil(width * height / 400));
    for (let i = 0; i < candidates; i++) {
      const x = random() * width;
      const y = random() * height;
      const distance = Math.hypot(x - width / 2, y - (height / 2 - 8)) / sphereRadius;
      const blend = Math.max(0, Math.min(1, (distance - 1.65) / 0.65));
      const edgeFade = blend * blend * (3 - 2 * blend);
      const outerFalloff = Math.exp(-((Math.max(0, distance - 2.3) / 2) ** 2));
      const density = edgeFade * (0.035 + 0.12 * outerFalloff);
      if (random() >= density) continue;
      surroundingStars.push({
        x, y,
        size: 0.35 + random() ** 2 * 0.8,
        brightness: (0.2 + random() * 0.35) * (0.65 + density * 0.35),
        phase: random() * Math.PI * 2,
      });
    }
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    createConstellation();
    draw();
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    // Distant stars twinkle quietly behind the rotating constellation sphere.
    for (const star of surroundingStars) {
      const twinkle = 0.86 + Math.sin(elapsed * 0.5 + star.phase) * 0.14;
      context.fillStyle = `rgba(168, 192, 230, ${star.brightness * twinkle})`;
      context.beginPath();
      context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      context.fill();
    }
    // Use the same scale on both axes so wide viewports keep a spherical sky.
    const radius = Math.min(width * 0.3, height * 0.32, 290);
    const turn = elapsed * 0.045;
    const tilt = 0.08 + Math.sin(elapsed * 0.08) * 0.12;
    const cos = Math.cos(turn), sin = Math.sin(turn);
    const cosTilt = Math.cos(tilt), sinTilt = Math.sin(tilt);
    const projected = stars.map((star) => {
      const turnedX = star.x * cos - star.z * sin;
      const turnedZ = star.x * sin + star.z * cos;
      const tiltedY = star.y * cosTilt - turnedZ * sinTilt;
      const depth = star.y * sinTilt + turnedZ * cosTilt;
      const scale = 3.5 / (3.5 + depth);
      const twinkle = 0.86 + Math.sin(elapsed * 0.8 + star.phase) * 0.14;
      return {
        ...star,
        x: width / 2 + turnedX * radius * scale,
        y: height / 2 + tiltedY * radius * scale - 8,
        depth,
        size: star.size * scale,
        alpha: star.brightness * twinkle * Math.min(1, 0.85 - depth * 0.18),
      };
    });

    // Hit-test the projected lines and stars on every frame, so hover follows
    // the rotating sky even when the mouse is stationary.
    let selection = null;
    let nearest = 18;
    if (hoverPoint) {
      for (const star of projected) {
        if (!star.constellation) continue;
        const distance = Math.hypot(hoverPoint.x - star.x, hoverPoint.y - star.y);
        if (distance < nearest) { nearest = distance; selection = star.constellation; }
      }
      for (const connection of connections) {
        const distance = distanceToSegment(hoverPoint, projected[connection.from], projected[connection.to]);
        if (distance < nearest) { nearest = distance; selection = connection.constellation; }
      }
    }
    updateInfoPanel(selection);
    hovered = selection;

    for (const { from, to, opacity, constellation } of connections) {
      const highlighted = constellation === hovered;
      const a = projected[from], b = projected[to];
      const depthFade = Math.min(1, 0.85 - (a.depth + b.depth) * 0.09);
      context.strokeStyle = highlighted ? "rgba(255, 139, 151, 0.95)" : `rgba(191, 206, 233, ${opacity * depthFade})`;
      context.lineWidth = highlighted ? 1.5 : 0.7;
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.stroke();
    }

    // Paint far stars first, then soft halos and bright pinpoints nearer us.
    projected.sort((a, b) => b.depth - a.depth);
    for (const star of projected) {
      const highlighted = star.constellation && star.constellation === hovered;
      const size = star.size * (highlighted ? 1.35 : 1);
      const alpha = highlighted ? 1 : star.alpha;
      if (star.anchor) {
        for (const [spread, opacity] of [[6, 0.025], [3, 0.08]]) {
          context.fillStyle = `rgba(${highlighted ? "255, 120, 145" : "172, 199, 244"}, ${alpha * opacity * (highlighted ? 2 : 1)})`;
          context.beginPath();
          context.arc(star.x, star.y, size * spread, 0, Math.PI * 2);
          context.fill();
        }
      }
      if (star.flare) {
        const reach = size * 3.5;
        context.strokeStyle = `rgba(181, 210, 255, ${alpha * 0.27})`;
        context.lineWidth = 0.6;
        context.beginPath();
        context.moveTo(star.x - reach, star.y);
        context.lineTo(star.x + reach, star.y);
        context.moveTo(star.x, star.y - reach);
        context.lineTo(star.x, star.y + reach);
        context.stroke();
      }
      context.fillStyle = `rgba(${highlighted ? "255, 230, 235" : star.anchor ? "230, 238, 255" : "168, 192, 230"}, ${alpha})`;
      context.beginPath();
      context.arc(star.x, star.y, size, 0, Math.PI * 2);
      context.fill();
    }
  }
  function tick(time) {
    frame = null;
    if (paused || !visible || document.hidden) { previousTime = null; return; }
    elapsed += previousTime === null ? 0 : Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
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
    if (!["mouse", "pen"].includes(event.pointerType) || !width || !height) return;
    const bounds = canvas.getBoundingClientRect();
    const x = event.clientX - bounds.left, y = event.clientY - bounds.top;
    // Leave links unobstructed and avoid highlighting through a button.
    hoverPoint = event.target.closest?.("a, button, input, textarea") ? null : { x, y };
    if (paused) draw();
  }
  function onPointerLeave() {
    hoverPoint = null;
    updateInfoPanel(null);
    hovered = null;
    if (paused) draw();
  }
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
  window.addEventListener("scroll", onPointerLeave, { passive: true });
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
    window.removeEventListener("scroll", onPointerLeave);
    if (infoPanel) {
      infoPanel.dataset.visible = "false";
      infoPanel.setAttribute("aria-hidden", "true");
    }
  };
}
