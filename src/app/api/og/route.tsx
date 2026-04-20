import { siteConfig } from "@/lib/data";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 80px",
          background: "#0a0f1a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-100px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(34,211,238,0.02) 40%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-50px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 60%)",
          }}
        />

        {/* Accent line */}
        <div
          style={{
            width: "48px",
            height: "3px",
            background: "rgba(34,211,238,0.5)",
            borderRadius: "2px",
            marginBottom: "40px",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#f0f0f0",
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          {siteConfig.name}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "26px",
            fontWeight: 500,
            color: "rgba(240,240,240,0.7)",
            letterSpacing: "-0.3px",
            marginBottom: "20px",
          }}
        >
          Senior Test Automation Engineer
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "rgba(34,211,238,0.55)",
            letterSpacing: "0.5px",
          }}
        >
          AI-Driven Quality Systems · Performance Engineering · Automation
          Architecture
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
