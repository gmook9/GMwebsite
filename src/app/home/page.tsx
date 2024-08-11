'use client'
import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import Card from '../components/Card';
import Avatar from '../components/Avatar';

const Home: React.FC = () => {
  const [init, setInit] = useState(false);
  const [starRating, setStarRating] = useState(1); // State for star rating

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: any): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: '#1a202c',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: starRating, // Adjust speed based on star rating
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'star',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [starRating]
  );

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white pb-16 overflow-hidden">
      {init && (
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      )}
      <div className="relative z-10 mb-8 pt-4">
        <Avatar />
      </div>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          imageUrl="/images/githubLogo.png"
          cardName="GitHub"
          cardBodyText="My projects and repositories on GitHub."
          btnColor="bg-gray-900 hover:bg-amber-700"
          cardColor="bg-amber-800"
          btnLink="https://github.com/gmook9"
        />
        <Card
          imageUrl="/images/ebwebstore.png"
          cardName="Shop Enchanting Butterfly"
          cardBodyText="Shop Enchanting Butterfly on Grailed."
          btnColor="bg-gray-900 hover:bg-blue-500"
          cardColor="bg-blue-600"
          btnLink="https://www.grailed.com/enchantingbutterfly"
        />
        <Card
          imageUrl="/images/eblogo.png"
          cardName="Enchanting Butterfly"
          cardBodyText="Official Enchanting Butterfly website"
          btnColor="bg-gray-900 hover:bg-blue-700"
          cardColor="bg-blue-800"
          btnLink="https://enchantingbutterfly.com/"
        />
        <Card
          imageUrl="/images/stardelicwebstore.png"
          cardName="Shop Stardelic"
          cardBodyText="Shop Stardelic on Depop."
          btnColor="bg-gray-900 hover:bg-indigo-500"
          cardColor="bg-indigo-600"
          btnLink="https://www.depop.com/st4rdelic/"
        />
        <Card
          imageUrl="/images/stardeliclogo.png"
          cardName="Stardelic"
          cardBodyText="Official Stardelic website."
          btnColor="bg-gray-900 hover:bg-indigo-700"
          cardColor="bg-indigo-800"
          btnLink="https://st4rdelic.com/"
        />
      </div>
      <div className="relative z-10 mt-8">
        <div className="rating">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            checked={starRating === 1}
            onChange={() => setStarRating(1)}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            checked={starRating === 2}
            onChange={() => setStarRating(2)}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            checked={starRating === 3}
            onChange={() => setStarRating(3)}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            checked={starRating === 4}
            onChange={() => setStarRating(4)}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            checked={starRating === 5}
            onChange={() => setStarRating(5)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
