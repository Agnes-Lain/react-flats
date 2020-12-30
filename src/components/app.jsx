import React from 'react';
import CardList from "./card_list";
import flats from "../data/flats";
import SimpleMap from "./map";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center = () => {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render () {
    return (
      <div>
        <div className="flat-list">
          <CardList
            flats={this.state.flats}
            selectedFlat={this.state.selectedFlat}
            selectFlat={this.selectFlat}
          />
        </div>
        <div className="map-container">
          <SimpleMap center={this.center} selectFlat={this.state.selectedFlat}/>
        </div>
      </div>
    );
  }
}

export default App;
