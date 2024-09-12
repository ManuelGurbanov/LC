import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#232230', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#38364D', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#grad1)" />
        <circle cx="400" cy="300" r="200" fill="#636087" />
        <circle cx="600" cy="100" r="150" fill="#7572A1" />
        <circle cx="200" cy="500" r="150" fill="#6E6BA6" />
      </svg>
    </div>
  );
};

export default Background;
