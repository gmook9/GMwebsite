import React from 'react';

const Avatar: React.FC = () => {
  return (
    <div className="avatar">
      <div className="mask mask-hexagon w-28">
        <img src="/images/profileImage.jpg" alt="Profile Image" />
      </div>
    </div>
  );
};

export default Avatar;
