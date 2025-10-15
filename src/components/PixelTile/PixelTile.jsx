import React from 'react';
import './PixelTile.css';

const PixelTile = ({ img, frontColor }) => {
  return (
    <div className="pixel-tile">
      <div className="pixel-tile-inner">
        {/* Front side with gradient/color */}
        <div
          className="pixel-tile-front"
          style={{
            background: frontColor, // gradient or color
          }}
        ></div>

        {/* Back side with image */}
        <div
          className="pixel-tile-back"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default PixelTile;