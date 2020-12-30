import React from 'react';
import CardList from "./card_list";
import flats from "../data/flats";

class App extends React.Component {

  render () {
    return (
      <div>
        <div className="flat-list">
          <CardList flats={flats}/>
        </div>
        <div className="map-container">
          a map
        </div>
      </div>
    );
  }
}

export default App;
