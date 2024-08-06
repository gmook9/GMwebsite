import React from 'react';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/images/profileImage.jpg"
            alt="Profile Image"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-8">
          Check out my links :)
        </h1>

        <div className="flex flex-col space-y-4 items-center">
          <a
            href="https://github.com/gmook9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-72 px-6 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            <Image src="/images/githubLogo.png" alt="GitHub Logo" width={24} height={24} className="mr-2" />
            Visit My GitHub
          </a>

          <a
            href="https://www.grailed.com/enchantingbutterfly"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-72 px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600"
          >
            <Image src="/images/eblogo.png" alt="Enchanting Butterfly Logo" width={24} height={24} className="mr-2" />
            Shop Enchanting Butterfly
          </a>

          <a
            href="https://enchantingbutterfly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-72 px-6 py-3 font-semibold text-white bg-blue-400 rounded-full hover:bg-blue-500"
          >
            <Image src="/images/eblogo.png" alt="Enchanting Butterfly Logo" width={24} height={24} className="mr-2" />
            Official Enchanting Butterfly Website
          </a>

          <a
            href="https://www.depop.com/st4rdelic/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-72 px-6 py-3 font-semibold text-white bg-indigo-500 rounded-full hover:bg-indigo-600"
          >
            <Image src="/images/stardeliclogo.png" alt="Stardelic Logo" width={24} height={24} className="mr-2" />
            Shop Stardelic
          </a>

          <a
            href="https://st4rdelic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-72 px-6 py-3 font-semibold text-white bg-indigo-400 rounded-full hover:bg-indigo-500"
          >
            <Image src="/images/stardeliclogo.png" alt="Stardelic Logo" width={24} height={24} className="mr-2" />
            Official Stardelic Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;