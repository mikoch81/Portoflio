import { cn } from "@/lib/utils";

const points = [42, 40, 44, 38, 36, 39, 33, 35, 30, 31, 27, 28, 24, 26, 22, 21, 23, 19, 18, 20, 16, 17, 14, 15];

function toPath(values: number[], w: number, h: number) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const step = w / (values.length - 1);
  return values
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / (max - min)) * (h - 8) - 4;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

export function Sparkline({ label, className }: { label: string; className?: string }) {
  const w = 320;
  const h = 96;
  const d = toPath(points, w, h);
  return (
    <figure className={cn("relative", className)}>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full overflow-visible" role="img" aria-label={label}>
        <defs>
          <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="var(--brand)" stopOpacity="0.25" />
            <stop offset="1" stopColor="var(--brand)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[24, 48, 72].map((y) => (
          <line key={y} x1="0" x2={w} y1={y} y2={y} stroke="var(--line)" />
        ))}
        <path d={`${d} L${w} ${h} L0 ${h} Z`} fill="url(#spark-fill)" />
        <path
          d={d}
          fill="none"
          stroke="var(--brand)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          className="animate-draw"
        />
        <circle cx={w} cy={h - ((points[points.length - 1] - 14) / (44 - 14)) * (h - 8) - 4} r="4" fill="var(--brand)" />
      </svg>
      <figcaption className="mt-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-fg-3">
        <span>p95 latency</span>
        <span className="text-brand">−32 %</span>
      </figcaption>
    </figure>
  );
}
