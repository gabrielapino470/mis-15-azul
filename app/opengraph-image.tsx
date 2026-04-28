import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mis 15 Años de Azul Pistoni - 9 de mayo";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 18% 18%, rgba(96, 165, 250, 0.46), transparent 30%), radial-gradient(circle at 82% 72%, rgba(226, 232, 240, 0.28), transparent 26%), linear-gradient(135deg, #020617 0%, #0f172a 46%, #1e3a8a 100%)",
          color: "#f8fafc",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            border: "1px solid rgba(226, 232, 240, 0.28)",
            borderRadius: 42,
            boxShadow: "0 28px 90px rgba(96, 165, 250, 0.3)",
            display: "flex",
            flexDirection: "column",
            height: 500,
            justifyContent: "center",
            padding: "58px 76px",
            textAlign: "center",
            width: 980
          }}
        >
          <div
            style={{
              color: "#dbeafe",
              fontSize: 28,
              letterSpacing: 14,
              marginBottom: 28,
              textTransform: "uppercase"
            }}
          >
            Mis 15 Años
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1
            }}
          >
            Azul Pistoni
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, transparent, #e2e8f0, transparent)",
              height: 2,
              margin: "42px auto 34px",
              width: 320
            }}
          />
          <div
            style={{
              color: "#e2e8f0",
              fontSize: 42,
              fontWeight: 500
            }}
          >
            9 de mayo
          </div>
          <div
            style={{
              color: "rgba(248, 250, 252, 0.78)",
              fontSize: 26,
              marginTop: 28
            }}
          >
            Compartí tus fotos y videos de esta noche inolvidable
          </div>
        </div>
      </div>
    ),
    size
  );
}
