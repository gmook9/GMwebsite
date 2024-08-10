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
    <div className={`card w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-sm shadow-lg pb-4 ${cardColor}`}>
      <figure className="flex justify-center items-center p-3 bg-gray-200">
        <img
          src={imageUrl}
          alt={cardName}
          className="object-contain max-h-40 w-full"
        />
      </figure>
      <div className={`card-body p-4`}>
        <h2 className="card-title text-base text-left">{cardName}</h2>
        <p className="text-sm text-left">{cardBodyText}</p>
        <div className="card-actions flex justify-center mt-5">
          <a href={btnLink} target="_blank" rel="noopener noreferrer">
            <button className={`btn ${btnColor} btn-sm text-sm text-white`}>Visit Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
