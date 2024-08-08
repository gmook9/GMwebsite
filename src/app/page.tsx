'use client';

import React from 'react';
import Link from 'next/link';
import CodeBlock from "../app/components/CodeBlock";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <CodeBlock />
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
