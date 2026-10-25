"use client";

import Particles from "@/components/Particles";

export default function ParticleBackground() {
  return (
    <div className="particles-background" aria-hidden="true">
      <Particles
        particleColors={["#8B5CF6", "#3B82F6", "#EC4899"]}
        particleCount={200}
        particleSpread={10}
        speed={0.08}
        particleBaseSize={120}
        sizeRandomness={0.5}
        shape="circle"
        drift="up"
        driftSpeed={0.3}
        glow={0.3}
        opacity={0.8}
        alphaParticles={false}
        moveParticlesOnHover={false}
        clickBurst={false}
        disableRotation={true}
        intro={false}
        pixelRatio={1}
      />
    </div>
  );
}