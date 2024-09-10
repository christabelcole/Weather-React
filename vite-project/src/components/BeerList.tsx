// src/components/BeerList.tsx
import React from 'react';

interface Beer {
  id: number;
  name: string;
  tagline: string;
  abv: number;
  ph: number;
  first_brewed: string;
}

interface BeerListProps {
  beers: Beer[];
}

const BeerList: React.FC<BeerListProps> = ({ beers }) => (
  <div>
    {beers.map((beer) => (
      <div key={beer.id}>
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>ABV: {beer.abv}%</p>
        <p>First Brewed: {beer.first_brewed}</p>
        <p>pH: {beer.ph}</p>
      </div>
    ))}
  </div>
);

export default BeerList;
