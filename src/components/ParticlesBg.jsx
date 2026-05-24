import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" }
        },
        particles: {
          number: {
            value: 60
          },
          color: {
            value: "#00ffcc"
          },
          links: {
            enable: true,
            color: "#00ffcc",
            distance: 150
          },
          move: {
            enable: true,
            speed: 1
          },
          size: {
            value: 2
          }
        }
      }}
    />
  );
}