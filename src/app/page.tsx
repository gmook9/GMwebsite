'use client';

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-200">
          Welcome
        </h1>
        <p className="text-xl text-gray-400 mt-4">
          I am a passionate Software Engineer focused on creating impactful digital solutions.
        </p>
        <Link href="/home">
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;