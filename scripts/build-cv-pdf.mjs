import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { finished } from "node:stream/promises";
import PDFDocument from "pdfkit";
import { cv, experience } from "../site/src/cv-data.js";

const output = fileURLToPath(new URL("../site/public/Jordan-Haigh-CV.pdf", import.meta.url));
const fonts = new URL("../site/public/assets/", import.meta.url);
await mkdir(new URL("../site/public/", import.meta.url), { recursive: true });
const doc = new PDFDocument({
  size: "A4", margin: 42, bufferPages: true,
  info: { Title: `${cv.name} - CV`, Author: cv.name, Subject: cv.title },
});
doc.registerFont("regular", fileURLToPath(new URL("montserrat-400.ttf", fonts)));
doc.registerFont("semibold", fileURLToPath(new URL("montserrat-600.ttf", fonts)));
doc.registerFont("light", fileURLToPath(new URL("montserrat-300.ttf", fonts)));
const stream = createWriteStream(output);
doc.pipe(stream);
const complete = Promise.all([finished(doc), finished(stream)]);
const margin = 42;
const width = doc.page.width - margin * 2;
const bottom = doc.page.height - 54;
const color = { ink: "#252832", muted: "#545b68", blue: "#416da8", coral: "#cf3f53", line: "#dce1e8" };
let y = margin;
const clean = (text) => text.replace(/[–—]/g, "-");
function measure(text, size = 9, font = "regular", textWidth = width) {
  return doc.font(font).fontSize(size).heightOfString(clean(text), { width: textWidth, lineGap: 2 });
}
function text(value, { size = 9, font = "regular", fill = color.ink, x = margin, textWidth = width, gap = 7, link } = {}) {
  const height = measure(value, size, font, textWidth);
  if (y + height > bottom) throw new Error(`CV content exceeds page bounds: ${value.slice(0, 60)}`);
  doc.font(font).fontSize(size).fillColor(fill).text(clean(value), x, y, { width: textWidth, lineGap: 2, link });
  y += height + gap;
}
function heading(value) {
  y += 10;
  doc.moveTo(margin, y).lineTo(margin + width, y).lineWidth(0.6).strokeColor(color.line).stroke();
  y += 14;
  text(value.toUpperCase(), { size: 10, font: "semibold", fill: color.blue, gap: 12 });
}
function header(first = false) {
  const gradient = doc.linearGradient(margin, 24, margin + width, 24).stop(0, "#6493ea").stop(1, "#ff5262");
  doc.rect(margin, 24, width, 3).fill(gradient);
  y = 42;
  text(first ? cv.name : `${cv.name} / CV`, { size: first ? 28 : 13, font: first ? "light" : "semibold", gap: first ? 9 : 4 });
  if (first) text(cv.title, { size: 10, fill: color.muted, gap: 14 });
}
function newPage() {
  doc.addPage();
  header();
}
header(true);
// Intentional contact information, not browser-generated page headers/footers.
for (let i = 0; i < cv.contacts.length; i += 2) {
  const rowY = y;
  text(cv.contacts[i].label, { size: 8, fill: color.blue, textWidth: width / 2, link: cv.contacts[i].url, gap: 5 });
  const nextY = y;
  if (cv.contacts[i + 1]) {
    y = rowY;
    text(cv.contacts[i + 1].label, { size: 8, fill: color.blue, x: margin + width / 2, textWidth: width / 2, link: cv.contacts[i + 1].url, gap: 5 });
  }
  y = Math.max(y, nextY);
}
heading("Professional profile");
for (const paragraph of cv.profile) text(paragraph);
heading("Skills & leadership");
for (const skill of cv.skills) {
  const rowY = y;
  text(skill.label, { size: 8.5, font: "semibold", textWidth: 133, gap: 10 });
  const labelEnd = y;
  y = rowY;
  text(skill.description, { size: 8.5, x: margin + 145, textWidth: width - 145, gap: 10 });
  y = Math.max(y, labelEnd);
}
heading("Education");
text(cv.education.qualification, { font: "semibold", gap: 4 });
text(`${cv.education.specialisation} · ${cv.education.institution} · ${cv.education.dates}`, { size: 8.5 });
heading("Industry experience");
text(cv.industries, { size: 8.5 });

newPage();
heading("Professional experience");
text(cv.anonymityNote, { size: 8, fill: color.muted, gap: 16 });
for (const job of experience) {
  const jobHeight = measure(job.role, 11, "semibold") + 6
    + measure(job.context, 8.5) + 5
    + measure(job.dates.join(" - "), 8) + 10
    + job.points.reduce((sum, point) => sum + measure(point, 9, "regular", width - 14) + 6, 0)
    + measure(job.technology, 8) + 8
    + (job.note ? measure(job.note, 8) + 8 : 0) + 16;
  if (y + jobHeight > bottom) {
    newPage();
    heading("Professional experience / continued");
  }
  text(job.role, { size: 11, font: "semibold", gap: 6 });
  text(job.context, { size: 8.5, fill: color.muted, gap: 5 });
  text(job.dates.join(" - "), { size: 8, fill: color.coral, gap: 10 });
  for (const point of job.points) {
    doc.circle(margin + 2, y + 6, 1.3).fill(color.blue);
    text(point, { x: margin + 14, textWidth: width - 14, gap: 6 });
  }
  text(job.technology, { size: 8, fill: color.blue, gap: 8 });
  if (job.note) text(job.note, { size: 8, fill: color.muted, gap: 8 });
  y += 16;
}
const { count } = doc.bufferedPageRange();
for (let page = 0; page < count; page++) {
  doc.switchToPage(page);
  doc.page.margins.bottom = 0;
  doc.font("regular").fontSize(8).fillColor(color.muted).text(`${page + 1} / ${count}`, margin, doc.page.height - 40, { width, align: "right", lineBreak: false });
}
doc.end();
await complete;
console.log(`Generated ${output} (${count} pages)`);
