'use client';

import React from 'react';
import CodeBlock from "../app/components/CodeBlock";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <CodeBlock />
      </div>
    </div>
  );
};

export default HomePage;
