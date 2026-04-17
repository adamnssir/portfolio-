export type PlaceholderAspect = "16:9" | "4:3" | "1:1" | "9:16";

function getSize(aspect: PlaceholderAspect) {
  switch (aspect) {
    case "4:3":
      return { width: 1200, height: 900 };
    case "1:1":
      return { width: 1200, height: 1200 };
    case "9:16":
      return { width: 900, height: 1600 };
    default:
      return { width: 1600, height: 900 };
  }
}

export function createSvgPlaceholderDataUri(options: {
  title: string;
  subtitle?: string;
  aspect?: PlaceholderAspect;
}) {
  const { title, subtitle, aspect = "16:9" } = options;
  const { width, height } = getSize(aspect);

  const safeTitle = title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeSubtitle = (subtitle ?? "").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.55" stop-color="#eff6ff"/>
      <stop offset="1" stop-color="#dbeafe"/>
    </linearGradient>
    <linearGradient id="a" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#2563eb" stop-opacity="0.75"/>
      <stop offset="0.5" stop-color="#0ea5e9" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#60a5fa" stop-opacity="0.45"/>
    </linearGradient>
    <filter id="b" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <circle cx="${Math.round(width * 0.25)}" cy="${Math.round(height * 0.2)}" r="${Math.round(
    Math.min(width, height) * 0.18,
  )}" fill="url(#a)" filter="url(#b)" opacity="0.55"/>
  <circle cx="${Math.round(width * 0.75)}" cy="${Math.round(height * 0.28)}" r="${Math.round(
    Math.min(width, height) * 0.14,
  )}" fill="url(#a)" filter="url(#b)" opacity="0.45"/>
  <rect x="56" y="56" width="${width - 112}" height="${height - 112}" rx="34" fill="rgba(255,255,255,0.72)" stroke="rgba(37,99,235,0.12)"/>
  <g font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial" fill="#0f172a">
    <text x="92" y="${Math.round(height * 0.52)}" font-size="64" font-weight="700">${safeTitle}</text>
    ${
      safeSubtitle
        ? `<text x="92" y="${Math.round(height * 0.60)}" font-size="30" fill="#475569">${safeSubtitle}</text>`
        : ""
    }
    <text x="92" y="${height - 92}" font-size="22" fill="#475569">Replace with real screenshot</text>
  </g>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
