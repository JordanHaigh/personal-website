"""Render the committed sharing card: python3 -m pip install Pillow, then run this file."""

import math
from pathlib import Path
import random

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "site/public/assets"
SCALE = 2
image = Image.new("RGB", (1200 * SCALE, 630 * SCALE), "#191919")
draw = ImageDraw.Draw(image)
rng = random.Random(27)


def line(points, colour, width=1):
    draw.line([(x * SCALE, y * SCALE) for x, y in points], fill=colour, width=max(1, round(width * SCALE)))


def star(x, y, radius, colour):
    draw.ellipse(((x - radius) * SCALE, (y - radius) * SCALE,
                  (x + radius) * SCALE, (y + radius) * SCALE), fill=colour)


def text(position, value, size, weight, colour):
    font = ImageFont.truetype(str(ASSETS / f"montserrat-{weight}.ttf"), size * SCALE)
    draw.text(tuple(v * SCALE for v in position), value, font=font, fill=colour)


# A spherical star cluster, with a quieter scatter across the rest of the card.
for _ in range(150):
    star(rng.uniform(30, 1170), rng.uniform(30, 600), rng.uniform(0.4, 0.9), "#343c49")

for _ in range(800):
    longitude = rng.uniform(0, math.tau)
    vertical = rng.uniform(-1, 1)
    horizontal = math.sqrt(1 - vertical * vertical)
    radius = rng.uniform(0.8, 1)
    x = math.cos(longitude) * horizontal * radius
    y = vertical * radius
    z = math.sin(longitude) * horizontal * radius
    perspective = 3.5 / (3.5 + z)
    brightness = rng.uniform(0.35, 0.8) * (0.8 - z * 0.2)
    colour = tuple(round(25 + (channel - 25) * brightness) for channel in (168, 192, 230))
    star(930 + x * 210 * perspective, 302 + y * 210 * perspective,
         rng.uniform(0.4, 1.25) * perspective, colour)

# Decorative southern-sky patterns echo the interactive hero.
patterns = [
    ([(846, 169), (816, 209), (876, 215), (843, 271)], [(0, 3), (1, 2)]),
    ([(969, 134), (1019, 191), (947, 211)], [(0, 1), (1, 2), (2, 0)]),
    ([(1032, 264), (1080, 283), (1065, 345), (1006, 330)], [(0, 1), (1, 2), (2, 3), (3, 0)]),
    ([(807, 333), (862, 314), (899, 360), (870, 408), (818, 393)], [(0, 1), (1, 2), (2, 3), (3, 4), (4, 0)]),
    ([(926, 275), (950, 322), (921, 372), (961, 431)], [(0, 1), (1, 2), (2, 3)]),
]
for points, connections in patterns:
    for a, b in connections:
        line([points[a], points[b]], "#626d87", 0.8)
    for x, y in points:
        star(x, y, 5, "#28303d")
        line([(x - 5, y), (x + 5, y)], "#7792b8", 0.6)
        line([(x, y - 5), (x, y + 5)], "#7792b8", 0.6)
        star(x, y, 1.8, "#e6eeff")

text((80, 104), "SOFTWARE ENGINEERING", 15, 600, "#729ce9")
text((76, 199), "Jordan Haigh", 62, 300, "#ff5262")
text((80, 302), "Technical Lead / Senior Engineer", 24, 400, "#f4f4f5")
text((80, 352), "Newcastle, Australia", 19, 400, "#b5b5bd")

for x in range(80, 1120):
    t = (x - 80) / 1039
    colour = tuple(round(a + (b - a) * t) for a, b in zip((100, 147, 234), (255, 82, 98)))
    line([(x, 520), (x, 522)], colour)
text((80, 549), "jordanhaigh.dev", 20, 400, "#f4f4f5")
text((918, 552), "WORK / CV / CONTACT", 12, 600, "#b5b5bd")

output = ASSETS / "social-preview.png"
image.resize((1200, 630), Image.Resampling.LANCZOS).save(output, optimize=True)
print(f"Generated {output}")
