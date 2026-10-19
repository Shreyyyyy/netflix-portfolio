// Builds optimized portrait assets from avatar.jpg in the project root.
// The light, low-saturation studio background is removed with a flood fill from the image edges,
// so the portrait sits on the site's dark backdrop like a transparent cutout.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const { data: rgb, info } = await sharp('avatar.jpg').removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;

const isBackground = (i) => {
  const r = rgb[i * 3], g = rgb[i * 3 + 1], b = rgb[i * 3 + 2];
  return Math.min(r, g, b) > 170 && Math.max(r, g, b) - Math.min(r, g, b) < 28;
};

// flood fill from every edge pixel through background-coloured pixels
const bg = new Uint8Array(width * height);
const stack = [];
for (let x = 0; x < width; x++) stack.push(x, (height - 1) * width + x);
for (let y = 0; y < height; y++) stack.push(y * width, y * width + width - 1);
while (stack.length) {
  const i = stack.pop();
  if (bg[i] || !isBackground(i)) continue;
  bg[i] = 1;
  const x = i % width;
  if (x > 0) stack.push(i - 1);
  if (x < width - 1) stack.push(i + 1);
  if (i >= width) stack.push(i - width);
  if (i < width * (height - 1)) stack.push(i + width);
}

const mask = Buffer.alloc(width * height);
for (let i = 0; i < mask.length; i++) mask[i] = bg[i] ? 0 : 255;
// soften the edge so hair doesn't look cut out with scissors
const alpha = await sharp(mask, { raw: { width, height, channels: 1 } }).blur(1.2).extractChannel(0).raw().toBuffer();

const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alpha[i];
}
const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">SHREYANS</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">AI / ML ENGINEER • AGENTIC AI • LLM SYSTEMS</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
