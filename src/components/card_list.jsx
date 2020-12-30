import React from 'react';
import Card from "./card";

class CardList extends React.Component {

  render () {
    return (
        this.props.flats.map(flat => <Card
          bg={flat.imageUrl}
          name={flat.name}
          price={flat.price}
          currency={flat.priceCurrency}
          lat={flat.lat}
          lng={flat.lng}
          key={flat.name}
        />)
    );
  }
}

export default CardList;
