// Usage: node tools/contrast-check.mjs — prints WCAG contrast ratios for the design-token palette.
const lum = (hex) => {
  const [r, g, b] = hex.replace("#", "").match(/.{2}/g).map((h) => parseInt(h, 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => { const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x); return (l1 + 0.05) / (l2 + 0.05); };

const themes = {
  dark: {
    bg: ["#07090f", "#0d1117", "#131a24", "#1a2332"],
    fg: { fg: "#e8ecf2", "fg-2": "#b4bfd0", "fg-3": "#8593a8", "fg-4": "#5a6678", accent: "#22d3ee", "accent-strong": "#67e8f9" },
  },
  light: {
    bg: ["#f6f1e8", "#fbf8f3", "#ffffff", "#efe8dc"],
    fg: { fg: "#1c252d", "fg-2": "#3d4a55", "fg-3": "#5c6a75", "fg-4": "#8a959e", accent: "#0b6a82", "accent-strong": "#155e75" },
  },
};
for (const [name, t] of Object.entries(themes)) {
  console.log(`\n${name.toUpperCase()}  ${t.bg.join("  ")}`);
  for (const [k, c] of Object.entries(t.fg)) {
    const rs = t.bg.map((b) => ratio(c, b));
    const min = Math.min(...rs);
    const grade = min >= 7 ? "AAA" : min >= 4.5 ? "AA " : min >= 3 ? "AA-large" : "FAIL";
    console.log(`${k.padEnd(14)} ${c}  ${rs.map((r) => r.toFixed(2).padStart(6)).join(" ")}   min ${min.toFixed(2)} ${grade}`);
  }
}
