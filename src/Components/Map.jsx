import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Spinner from './Spinner';

const Map = () => {

  const [location, setLocation] = React.useState([0,0]);

  const getLocation = () => {
    const success = (position) => {
      setLocation([position.coords.latitude, position.coords.longitude]);
    };
    const failure = () => {
      alert("Unable to retrieve your location or permission denied.");
    };
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(success, failure);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  React.useEffect(() => getLocation(), [location]);

  console.log("location: ", location)

  return (
    // render map container when location is available
      location[0] === 0 ? <Spinner />:(
            <MapContainer
      center={location}
      zoom={10}
      style={{ height: '50vh', width: '100%' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=knsMPDdvtrm6AQO31Kfq"
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors'
      />
      <Marker position={location}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
      )
  );
};

export default Map;
