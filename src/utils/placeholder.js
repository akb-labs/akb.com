// Generates a simple inline SVG placeholder image (no network dependency)
// so the "bones" version renders real placeholder art without external assets.
export function placeholderImage(label, width = 400, height = 300, bg = '#d9d9d9', fg = '#555') {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="${bg}" />
      <text x="50%" y="50%" fill="${fg}" font-family="sans-serif" font-size="${Math.round(
        Math.min(width, height) / 10
      )}" text-anchor="middle" dominant-baseline="middle">${label}</text>
    </svg>
  `.trim()
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
