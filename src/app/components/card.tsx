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
    <div className="card bg-base-100 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm shadow-xl pb-109">
      <figure className="flex justify-center items-center p-4 bg-white">
        <img
          src={imageUrl}
          alt={cardName}
          className="object-contain max-h-48 w-full"
        />
      </figure>
      <div className={`card-body ${cardColor}`}>
        <h2 className="card-title text-left">{cardName}</h2>
        <p className="text-left">{cardBodyText}</p>
        <div className="card-actions justify-end mt-4">
          <a href={btnLink} target="_blank" rel="noopener noreferrer">
            <button className={`btn ${btnColor} text-white`}>Visit Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
