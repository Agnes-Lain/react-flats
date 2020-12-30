import React from 'react';
import GoogleMapReact from "google-map-react";
import Marker from "./marker";


const SimpleMap = ({ center, selectFlat }) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{ lat: 48.884211, lng: 2.34689 }}
        center={center()}
        defaultZoom={11}
      >
        <Marker
          lat={selectFlat.lat}
          lng={selectFlat.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
