import React, { useState, useEffect } from 'react';
import PixelTile from '../PixelTile/PixelTile';
import './HeroGrid.css';

const IMAGES = [
  'https://picsum.photos/100?random=1',
  'https://picsum.photos/100?random=2',
  'https://picsum.photos/100?random=3',
  'https://picsum.photos/100?random=4',
  'https://picsum.photos/100?random=5',
];

const TILE_SIZE = 20; // in px
const HERO_GRID_HEIGHT = 40; // in px

const HeroGrid = () => {
  const [tileCount, setTileCount] = useState(0);

  // Calculate number of tiles based on container width & fixed height
  const calculateTileCount = () => {
    const cols = Math.ceil(window.innerWidth / TILE_SIZE);
    const rows = Math.floor(HERO_GRID_HEIGHT / TILE_SIZE);
    setTileCount(rows * cols);
  };

  useEffect(() => {
    calculateTileCount(); // initial calculation
    window.addEventListener('resize', calculateTileCount); // recalc on resize
    return () => window.removeEventListener('resize', calculateTileCount);
  }, []);

  const tiles = Array.from({ length: tileCount });

  return (
    <section className="hero-grid">
      {tiles.map((_, idx) => (
        <PixelTile key={idx} img={IMAGES[idx % IMAGES.length]} />
      ))}
    </section>
  );
};

export default HeroGrid;