import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '50vh', width: '100%' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=knsMPDdvtrm6AQO31Kfq"
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
