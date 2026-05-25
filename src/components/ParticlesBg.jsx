import Particles from "@tsparticles/react"
import { useCallback } from "react"
import { loadFull } from "tsparticles"

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -10,
        },

        background: {
          color: {
            value: "#000000",
          },
        },

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: ["#00ffff", "#a855f7"],
          },

          links: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
    />
  )
}