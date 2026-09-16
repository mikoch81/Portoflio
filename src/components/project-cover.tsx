import type { CoverKind } from "@/content/types";
import { cn } from "@/lib/utils";

const base = {
  line: "var(--line-strong)",
  soft: "var(--surface-3)",
  panel: "var(--surface-2)",
  ink: "var(--fg-3)",
  brand: "var(--brand)",
  brandSoft: "var(--brand-soft)",
};

function Browser() {
  return (
    <>
      <rect x="24" y="28" width="352" height="184" rx="10" fill={base.panel} stroke={base.line} />
      <rect x="24" y="28" width="352" height="30" rx="10" fill={base.soft} />
      <circle cx="42" cy="43" r="4" fill={base.ink} opacity="0.5" />
      <circle cx="56" cy="43" r="4" fill={base.ink} opacity="0.5" />
      <circle cx="70" cy="43" r="4" fill={base.ink} opacity="0.5" />
      <rect x="96" y="36" width="200" height="14" rx="7" fill={base.panel} stroke={base.line} />
      <rect x="44" y="80" width="130" height="10" rx="5" fill={base.ink} opacity="0.5" />
      <rect x="44" y="100" width="200" height="8" rx="4" fill={base.ink} opacity="0.25" />
      <rect x="44" y="116" width="170" height="8" rx="4" fill={base.ink} opacity="0.25" />
      <rect x="44" y="150" width="96" height="30" rx="8" fill={base.brand} />
      <rect x="264" y="80" width="90" height="100" rx="8" fill={base.brandSoft} stroke={base.line} />
      <path d="M292 132l12 12 24-26" fill="none" stroke={base.brand} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M150 170 L214 200" stroke={base.ink} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      <path d="M214 200l-2-12 10 7z" fill={base.ink} opacity="0.8" />
    </>
  );
}

function Mobile() {
  return (
    <>
      <rect x="150" y="16" width="100" height="208" rx="18" fill={base.panel} stroke={base.line} />
      <rect x="182" y="24" width="36" height="6" rx="3" fill={base.ink} opacity="0.5" />
      <rect x="160" y="40" width="80" height="34" rx="6" fill={base.brandSoft} />
      <rect x="168" y="50" width="44" height="6" rx="3" fill={base.brand} />
      <rect x="168" y="60" width="28" height="4" rx="2" fill={base.ink} opacity="0.5" />
      {[84, 106, 128, 150].map((y) => (
        <g key={y}>
          <rect x="160" y={y} width="80" height="16" rx="4" fill={base.soft} />
          <rect x="166" y={y + 6} width="36" height="4" rx="2" fill={base.ink} opacity="0.45" />
          <circle cx="230" cy={y + 8} r="3" fill={base.brand} />
        </g>
      ))}
      <rect x="160" y="176" width="80" height="36" rx="6" fill={base.soft} stroke={base.line} strokeDasharray="3 3" />
      <text x="200" y="198" textAnchor="middle" fontSize="9" fontFamily="var(--font-geist-mono), monospace" fill={base.ink}>
        WEBVIEW
      </text>
      <path d="M96 80h40M96 120h40M96 160h40" stroke={base.line} strokeWidth="2" />
      <path d="M264 80h40M264 120h40M264 160h40" stroke={base.line} strokeWidth="2" />
      <text x="70" y="84" fontSize="10" fontFamily="var(--font-geist-mono), monospace" fill={base.ink}>
        iOS
      </text>
      <text x="310" y="84" fontSize="10" fontFamily="var(--font-geist-mono), monospace" fill={base.ink}>
        Android
      </text>
    </>
  );
}

function Chart() {
  const bars = [60, 84, 72, 110, 96, 130, 118, 150, 142, 120, 104, 90];
  return (
    <>
      <rect x="24" y="24" width="352" height="192" rx="10" fill={base.panel} stroke={base.line} />
      {[60, 100, 140, 180].map((y) => (
        <line key={y} x1="44" x2="356" y1={y} y2={y} stroke={base.line} />
      ))}
      {bars.map((h, i) => (
        <rect key={i} x={52 + i * 25} y={190 - h * 0.85} width="14" height={h * 0.85} rx="3" fill={i === 7 ? base.brand : base.ink} opacity={i === 7 ? 1 : 0.35} />
      ))}
      <path
        d="M52 150 C 90 140, 120 128, 160 122 S 230 96, 260 84 S 320 70, 356 62"
        fill="none"
        stroke={base.brand}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line x1="44" x2="356" y1="76" y2="76" stroke={base.brand} strokeDasharray="5 5" opacity="0.7" />
      <rect x="292" y="40" width="58" height="20" rx="6" fill={base.brandSoft} />
      <text x="321" y="54" textAnchor="middle" fontSize="10" fontFamily="var(--font-geist-mono), monospace" fill={base.brand}>
        p95
      </text>
    </>
  );
}

function Terminal() {
  return (
    <>
      <rect x="24" y="24" width="352" height="192" rx="10" fill="#0b0f16" stroke={base.line} />
      <rect x="24" y="24" width="352" height="26" rx="10" fill="#131a24" />
      <circle cx="42" cy="37" r="4" fill="#ef4444" opacity="0.8" />
      <circle cx="56" cy="37" r="4" fill="#f59e0b" opacity="0.8" />
      <circle cx="70" cy="37" r="4" fill="#22c55e" opacity="0.8" />
      <text x="44" y="76" fontSize="11" fontFamily="var(--font-geist-mono), monospace" fill="#67e8f9">
        $ qa-agent analyze run-142.jtl
      </text>
      {[
        ["▸ 48 210 samples · 0.42 % errors", "#b4bfd0"],
        ["▸ p95 812 ms → 1 034 ms (+27 %)", "#b4bfd0"],
        ["▸ cluster: 91 % HTTP 502 @ gateway", "#b4bfd0"],
        ["✓ report → run-142-summary.docx", "#22d3ee"],
      ].map(([t, c], i) => (
        <text key={t} x="44" y={98 + i * 22} fontSize="11" fontFamily="var(--font-geist-mono), monospace" fill={c}>
          {t}
        </text>
      ))}
      <rect x="44" y="190" width="8" height="12" fill="#22d3ee" />
    </>
  );
}

function Pipeline() {
  const nodes = [
    { x: 60, label: "build" },
    { x: 160, label: "test" },
    { x: 260, label: "zephyr" },
    { x: 340, label: "jira" },
  ];
  return (
    <>
      <path d="M60 120 H340" stroke={base.line} strokeWidth="2" />
      <path d="M60 120 H260" stroke={base.brand} strokeWidth="2" />
      {nodes.map((n, i) => (
        <g key={n.label}>
          <circle cx={n.x} cy="120" r="18" fill={i < 3 ? base.brandSoft : base.soft} stroke={i < 3 ? base.brand : base.line} strokeWidth="2" />
          {i < 3 ? (
            <path d={`M${n.x - 7} 120l5 5 10-11`} fill="none" stroke={base.brand} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <circle cx={n.x} cy="120" r="5" fill={base.ink} opacity="0.6" />
          )}
          <text x={n.x} y="160" textAnchor="middle" fontSize="11" fontFamily="var(--font-geist-mono), monospace" fill={base.ink}>
            {n.label}
          </text>
        </g>
      ))}
      <rect x="120" y="44" width="160" height="30" rx="8" fill={base.panel} stroke={base.line} />
      <text x="200" y="64" textAnchor="middle" fontSize="11" fontFamily="var(--font-geist-mono), monospace" fill={base.ink}>
        cycle #142 · 96 / 98 passed
      </text>
    </>
  );
}

function Api() {
  const rows = [
    ["GET  /health", "200", "12 ms"],
    ["GET  /accounts/42", "200", "38 ms"],
    ["POST /transfer", "201", "84 ms"],
    ["GET  /accounts/x", "404", "9 ms"],
  ];
  return (
    <>
      <rect x="24" y="24" width="352" height="192" rx="10" fill={base.panel} stroke={base.line} />
      {rows.map(([m, s, t], i) => (
        <g key={m}>
          <rect x="40" y={44 + i * 38} width="320" height="28" rx="6" fill={base.soft} />
          <text x="52" y={62 + i * 38} fontSize="11" fontFamily="var(--font-geist-mono), monospace" fill={base.ink}>
            {m}
          </text>
          <text x="270" y={62 + i * 38} fontSize="11" fontFamily="var(--font-geist-mono), monospace" fill={s.startsWith("2") ? base.brand : base.ink}>
            {s}
          </text>
          <text x="348" y={62 + i * 38} textAnchor="end" fontSize="11" fontFamily="var(--font-geist-mono), monospace" fill={base.ink}>
            {t}
          </text>
        </g>
      ))}
      <rect x="40" y="196" width="320" height="6" rx="3" fill={base.soft} />
      <rect x="40" y="196" width="240" height="6" rx="3" fill={base.brand} />
    </>
  );
}

const covers: Record<CoverKind, () => React.JSX.Element> = {
  browser: Browser,
  mobile: Mobile,
  chart: Chart,
  terminal: Terminal,
  pipeline: Pipeline,
  api: Api,
};

export function ProjectCover({ kind, className }: { kind: CoverKind; className?: string }) {
  const Art = covers[kind];
  return (
    <div className={cn("relative overflow-hidden bg-surface-1", className)} aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <svg viewBox="0 0 400 240" className="relative h-full w-full" preserveAspectRatio="xMidYMid meet">
        <Art />
      </svg>
    </div>
  );
}
