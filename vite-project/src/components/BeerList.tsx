import React from 'react';
import BeerCard from './BeerCard';

type Beer = {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  abv: number;
  first_brewed: string;
  ph: number;
};

type BeerListProps = {
  beers: Beer[];
};

const BeerList: React.FC<BeerListProps> = ({ beers }) => {
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <BeerCard
          key={beer.id}
          name={beer.name}
          tagline={beer.tagline}
          image_url={beer.image_url}
          abv={beer.abv}
          first_brewed={beer.first_brewed}
          ph={beer.ph}
        />
      ))}
    </div>
  );
};

export default BeerList;

