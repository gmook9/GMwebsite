import React from 'react';
import Image from 'next/image';
import Card from '../components/card';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="mb-8">
        <Image
          src="/images/profileImage.jpg"
          alt="Profile Image"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          imageUrl="/images/githubLogo.png"
          cardName="Visit My GitHub"
          cardBodyText="Check out my projects and repositories on GitHub."
          btnColor="bg-blue-600 hover:bg-blue-700"
          cardColor="bg-gray-800"
          btnLink="https://github.com/gmook9"
        />
        <Card
          imageUrl="/images/eblogo.png"
          cardName="Shop Enchanting Butterfly"
          cardBodyText="Explore our collection of enchanting products on Grailed."
          btnColor="bg-blue-500 hover:bg-blue-600"
          cardColor="bg-gray-700"
          btnLink="https://www.grailed.com/enchantingbutterfly"
        />
        <Card
          imageUrl="/images/eblogo.png"
          cardName="Official Enchanting Butterfly Website"
          cardBodyText="Visit our official website for exclusive offers and updates."
          btnColor="bg-blue-400 hover:bg-blue-500"
          cardColor="bg-gray-600"
          btnLink="https://enchantingbutterfly.com/"
        />
        <Card
          imageUrl="/images/stardeliclogo.png"
          cardName="Shop Stardelic"
          cardBodyText="Discover unique items from Stardelic on Depop."
          btnColor="bg-indigo-500 hover:bg-indigo-600"
          cardColor="bg-gray-800"
          btnLink="https://www.depop.com/st4rdelic/"
        />
        <Card
          imageUrl="/images/stardeliclogo.png"
          cardName="Official Stardelic Website"
          cardBodyText="Check out our official Stardelic website for more."
          btnColor="bg-indigo-400 hover:bg-indigo-500"
          cardColor="bg-gray-700"
          btnLink="https://st4rdelic.com/"
        />
      </div>
    </div>
  );
};

export default Home;
