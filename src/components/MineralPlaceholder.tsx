import React from 'react';

const MineralPlaceholder: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="400" fill="#f0f0f0" />
      <text
        x="300"
        y="200"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        textAnchor="middle"
        fill="#888888"
      >
        Mineral Image Placeholder
      </text>
      <path
        d="M200,240 L300,140 L400,240 Z"
        fill="#cccccc"
        stroke="#999999"
        strokeWidth="2"
      />
      <path
        d="M150,300 L300,180 L450,300 Z"
        fill="#dddddd"
        stroke="#999999"
        strokeWidth="2"
      />
    </svg>
  );
};

export default MineralPlaceholder; 