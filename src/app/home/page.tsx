import React from 'react';
import Image from 'next/image';
import Card from '../components/card';
import Avatar from '../components/avatar';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white pb-16">
      <div className="mb-8 pt-4">
        <Avatar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
};

export default Home;
