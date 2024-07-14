import React from 'react';
import { GroundCard } from '../Cards/groundCard';

export const GroundCardList = ({ gCards, showDetails }) => {
    
  return (
    <div className="pcard-list">
      {gCards.map((pcard) => (
        <GroundCard key={pcard.id} pcard={pcard} showDetails={showDetails}/>
      ))}
    </div>
  );
};