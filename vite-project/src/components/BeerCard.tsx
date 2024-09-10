import React from 'react';

type BeerCardProps = {
  name: string;
  tagline: string;
  image_url: string;
  abv: number;
  first_brewed: string;
  ph: number;
};

const BeerCard: React.FC<BeerCardProps> = ({ name, tagline, image_url, abv, first_brewed, ph }) => {
  return (
    <div className="beer-card">
      <img src={image_url} alt={name} className="beer-image" />
      <h3>{name}</h3>
      <p>{tagline}</p>
      <p>ABV: {abv}%</p>
      <p>First Brewed: {first_brewed}</p>
      <p>pH: {ph}</p>
    </div>
  );
};

export default BeerCard;

