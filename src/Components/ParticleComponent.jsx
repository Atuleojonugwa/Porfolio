import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);


 const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: {
        value: "#010409", // The very dark Navy/Black from the portfolio
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Adds more particles on click
        },
        onHover: {
          enable: true,
          mode: "grab", // Draws lines to your mouse cursor
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 200,
          links: {
            opacity: 0.5, // How bright the lines to your mouse are
          },
        },
      },
    },
    particles: {
      color: {
        value: "#8b5cf6",
      },
      links: {
        color: "#8b5cf6",
        distance: 150,
        enable: true,
        opacity: 0.15, // Thin, subtle lines between dots
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out", // Particles wrap around the screen
        },
        random: false,
        speed: 1.2, // Slow, elegant movement
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100, // Number of particles
      },
      opacity: {
        value: 0.3, // Particles are slightly transparent
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 }, // Variation in dot sizes
      },
    },
    detectRetina: true,
  }), []);

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default ParticlesComponent;