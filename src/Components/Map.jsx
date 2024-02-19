import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: { lat: 0, lng: 0 },
            loading: true
        };
    }

    componentDidMount() {
        if (navigator.geolocation) {
            this.watchId = navigator.geolocation.watchPosition(position => {
                this.setState({
                    currentPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    loading: false
                });
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    componentWillUnmount() {
        if (navigator.geolocation) {
            navigator.geolocation.clearWatch(this.watchId);
        }
    }

    render() {
        const { currentPosition, loading } = this.state;

        const MapComponent = withScriptjs(withGoogleMap(() =>
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: currentPosition.lat, lng: currentPosition.lng }}
            >
                <Marker position={{ lat: currentPosition.lat, lng: currentPosition.lng }} />
            </GoogleMap>
        ));

        return (
            <div style={{ width: '100%', height: '400px' }}>
                {loading ? 'Loading...' : (
                    <MapComponent
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                )}
            </div>
        );
    }
}

export default Map;
