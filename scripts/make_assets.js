const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

function createSvgAsset(filename, title, subtitle, primaryBg, goldAccent) {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${primaryBg}" />
      <stop offset="100%" stop-color="#0D0D10" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F3E5AB" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#AA7C11" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${goldAccent}" stroke-width="0.5" stroke-opacity="0.15" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="800" fill="url(#bgGrad)" />
  <rect width="1200" height="800" fill="url(#grid)" />

  <!-- Geometric Architectural Design -->
  <circle cx="600" cy="400" r="320" fill="none" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.3" />
  <circle cx="600" cy="400" r="240" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" stroke-opacity="0.2" />
  <circle cx="600" cy="400" r="160" fill="none" stroke="url(#goldGrad)" stroke-width="1" stroke-opacity="0.4" />
  
  <line x1="200" y1="400" x2="1000" y2="400" stroke="url(#goldGrad)" stroke-width="1.5" stroke-opacity="0.25" />
  <line x1="600" y1="100" x2="600" y2="700" stroke="url(#goldGrad)" stroke-width="1.5" stroke-opacity="0.25" />

  <!-- Radiant Gold Center Ring -->
  <circle cx="600" cy="400" r="80" fill="#1C1C24" stroke="url(#goldGrad)" stroke-width="3" />

  <!-- Inner Icon Symbol -->
  <polygon points="600,350 640,430 560,430" fill="url(#goldGrad)" opacity="0.9" />

  <!-- Title Overlay -->
  <text x="600" y="580" text-anchor="middle" fill="#FAF8F5" font-family="serif" font-size="36" font-weight="bold" letter-spacing="2">
    ${title.toUpperCase()}
  </text>
  <text x="600" y="625" text-anchor="middle" fill="#D4AF37" font-family="sans-serif" font-size="20" letter-spacing="4">
    ${subtitle.toUpperCase()}
  </text>
</svg>`;

  fs.writeFileSync(path.join(assetsDir, filename), svgContent, 'utf-8');
  console.log(`Generated SVG asset: ${filename}`);
}

createSvgAsset('exp-no-purchases.svg', '30 Days Minimal Consumption', 'Worth Living Trial', '#181820', '#D4AF37');
createSvgAsset('exp-workweek.svg', '4-Day Work Week Trial', 'Living Architecture', '#1A1822', '#D4AF37');
createSvgAsset('exp-cook.svg', 'Cook Every Meal At Home', 'Nourishment Ritual', '#201A18', '#D4AF37');
createSvgAsset('exp-analog.svg', 'Analog Mornings', 'Digital Quiet Trial', '#141820', '#D4AF37');
createSvgAsset('exp-toolshed.svg', 'Neighborhood Tool Shed', 'Shared Capability', '#1C1A14', '#D4AF37');
createSvgAsset('exp-zerowaste.svg', 'Zero Single-Use Plastic', 'Permaculture Trial', '#161C18', '#D4AF37');
createSvgAsset('question-home.svg', 'What Is Enough?', 'Perspective Question', '#1B1924', '#D4AF37');
createSvgAsset('question-work.svg', 'Work & Purpose', 'Life-Centered Design', '#1E1A20', '#D4AF37');
createSvgAsset('question-community.svg', 'Real Community', 'Human Trust', '#221C18', '#D4AF37');
