import React from 'react';
import Card from "./card";


const CardList = (props) => {
  return props.flats.map((flat, index) => {
    return (
      <Card
        bg={flat.imageUrl}
        name={flat.name}
        price={flat.price}
        currency={flat.priceCurrency}
        selectFlat={props.selectFlat}
        selected={flat.name === props.selectedFlat.name}
        key={flat.lat}
        index={index}
      />
    );
  });
};


export default CardList;
