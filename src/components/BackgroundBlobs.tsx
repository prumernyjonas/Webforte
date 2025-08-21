import React from "react";

const BackgroundBlobs = () => (
  <div
    aria-hidden="true"
    className="fixed inset-0 -z-10 pointer-events-none w-full h-full overflow-hidden"
  >
    {/* Subtle gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

    {/* Geometric grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `
					linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
					linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
				`,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Subtle floating elements */}
    <div className="absolute top-20 left-10 w-2 h-2 bg-primary/10 rounded-full animate-pulse" />
    <div className="absolute top-40 right-20 w-1 h-1 bg-primary/15 rounded-full animate-pulse delay-1000" />
    <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/8 rounded-full animate-pulse delay-2000" />
    <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary/12 rounded-full animate-pulse delay-3000" />

    {/* Modern gradient orbs - much more subtle */}
    <div
      className="absolute top-0 right-0 w-96 h-96 opacity-[0.03]"
      style={{
        background:
          "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
        transform: "translate(30%, -30%)",
      }}
    />

    <div
      className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.02]"
      style={{
        background:
          "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
        transform: "translate(-30%, 30%)",
      }}
    />
  </div>
);

export default BackgroundBlobs;
