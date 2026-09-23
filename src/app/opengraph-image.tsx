import { ImageResponse } from "next/og";

export const alt = "Tat Sat Yoga — online yoga classes. First class free.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#FBF7EE",
          padding: "84px 96px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 120,
            right: -110,
            width: 420,
            height: 420,
            borderRadius: 999,
            border: "18px solid rgba(85,107,47,0.10)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#6E6039",
          }}
        >
          Online Yoga · First Class Free
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 108,
            fontStyle: "italic",
            color: "#33401F",
            lineHeight: 1.05,
          }}
        >
          Move. Breathe. Be.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 30,
            color: "#5F5E49",
            maxWidth: 780,
            lineHeight: 1.45,
          }}
        >
          Live online yoga with a 300-hour certified teacher — 1:1, small groups
          and senior chair yoga.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 52,
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#556B2F",
              color: "#FBF7EE",
              fontSize: 26,
              padding: "16px 34px",
              borderRadius: 999,
            }}
          >
            Book your free trial
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#556B2F", fontStyle: "italic" }}>
            tat sat
          </div>
        </div>
      </div>
    ),
    size,
  );
}
