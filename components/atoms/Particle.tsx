import { useState, useEffect} from 'react';
import type { Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const Particle = () => {
    const [init, setInit] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });

        // Unmount particles when scrolled past Hero section (approx 800px) to save CPU/GPU
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        // console.log(container);
    };

    const particleOptions:any = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: { enable: false },
                onHover: { enable: false },
            },
        },
        particles: {
            color: { value: "#ffffff" },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "out" },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: { enable: true },
                value: 30, // Keep density low for performance
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: false, // Disabling retina detection saves significant GPU
    };
 
  if (init && isVisible) {
    return (
     <div className='!absolute !top-[500px] !w-[200px] h-20'>
         <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particleOptions}
        />
     </div>
    );
  }

  return null;
};

export default Particle