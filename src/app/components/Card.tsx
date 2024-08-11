import React from 'react';

interface CardProps {
  imageUrl: string;
  cardName: string;
  cardBodyText: string;
  btnColor: string;
  cardColor: string;
  btnLink: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, cardName, cardBodyText, btnColor, cardColor, btnLink }) => {
  return (
    <div className={`card w-full max-w-[16rem] sm:max-w-[18rem] md:max-w-[18rem] lg:max-w-[18rem] shadow-lg pb-3 ${cardColor} opacity-90`}>
      <figure className="flex justify-center items-center p-2 bg-gray-200">
        <img
          src={imageUrl}
          alt={cardName}
          className="object-contain max-h-36 w-full"
        />
      </figure>
      <div className={`card-body p-3`}>
        <h2 className="card-title text-sm text-left">{cardName}</h2>
        <p className="text-xs text-left">{cardBodyText}</p>
        <div className="card-actions flex justify-center mt-4">
          <a href={btnLink} target="_blank" rel="noopener noreferrer">
            <button className={`btn ${btnColor} btn-xs text-xs text-white`}>Visit Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
