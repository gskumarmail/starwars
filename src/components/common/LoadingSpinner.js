import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ width = 30, height = 30, color = '#21578a' }) => {
  return (
    <div className="loading-spinner">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        >
        <circle
            cx="50"
            cy="50"
            fill="none"
            stroke={color}
            strokeWidth="10"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
        >
            <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            />
        </circle>
        </svg>
        <p>Loading...</p>
    </div>
  );
};

// Prop types validation
LoadingSpinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default LoadingSpinner;
