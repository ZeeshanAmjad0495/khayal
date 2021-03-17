import React from 'react';
import { useSelector } from 'react-redux';

import ItemCard from './ItemCard';
import { selectItems } from '../features/itemsSlice';

import './CardsContainer.css';

const CardsContainer = () => {
  const items = useSelector(selectItems);

  return (
    <div className="cards-container">
      {items.map(({ id, title, description, imageUrl, price }) => (
        <ItemCard
          key={id}
          title={title}
          description={description}
          image={imageUrl}
          price={price}
          quantity={1}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
