'use client'
import React from 'react';
import ParticleBackground from '../app/components/ParticleBackground';
import CodeBlock from '../app/components/CodeBlock';

const HomePage: React.FC = () => {
  const starRating = 1;

  return (
    <div className="relative min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center p-4 overflow-hidden">
      <ParticleBackground speed={starRating} />
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <CodeBlock />
      </div>
    </div>
  );
};

export default HomePage;
