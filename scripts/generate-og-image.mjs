import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0d1117"/>
      <stop offset="100%" style="stop-color:#161b22"/>
    </linearGradient>
    <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#58a6ff"/>
      <stop offset="100%" style="stop-color:#7ee787"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Border accent -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#text-gradient)"/>

  <!-- Title -->
  <text x="600" y="220" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="url(#text-gradient)" text-anchor="middle">kylix-pqc</text>

  <!-- Tagline -->
  <text x="600" y="300" font-family="system-ui, -apple-system, sans-serif" font-size="36" fill="#e6edf3" text-anchor="middle">Post-Quantum Cryptography for Rust</text>

  <!-- Features -->
  <text x="600" y="370" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#8b949e" text-anchor="middle">ML-KEM (FIPS 203) • no_std • Constant-Time • NIST ACVP Tested</text>

  <!-- CTA Button -->
  <rect x="475" y="420" width="250" height="56" rx="8" fill="url(#text-gradient)"/>
  <text x="600" y="458" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="600" fill="#0d1117" text-anchor="middle">Get Started →</text>

  <!-- URL -->
  <text x="600" y="560" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#58a6ff" text-anchor="middle">kylix-pqc.dev</text>
</svg>
`;

const outputPath = join(__dirname, '..', 'public', 'og-image.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => console.log('OG image generated:', outputPath))
  .catch(err => console.error('Error generating OG image:', err));
