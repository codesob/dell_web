// Map.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import classes from './map.module.css';

const defaultLocation = [	27.6974, 	85.3318]; // Kathmandu coordinates
const defaultZoom = 15;

export default function Map({ readonly, location, onChange }) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map && location && !readonly) {
      map.flyTo(location, defaultZoom);
    }
  }, [map, location, readonly]);

  const handleMapClick = (e) => {
    if (!readonly && onChange) {
      onChange(e.latlng);
    }
  };

  const handleFindLocation = () => {
    if (map && !readonly) {
      map.locate();
    }
  };

  const markerIcon = L.divIcon({
    className: 'custom-icon',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
    html: '<div class="custom-marker"></div>',
  });

  return (
    <div className={classes.container}>
    
      <MapContainer
        className={classes.map}
        center={defaultLocation}
        zoom={defaultZoom}
        dragging={!readonly}
        touchZoom={!readonly}
        doubleClickZoom={!readonly}
        scrollWheelZoom={!readonly}
        boxZoom={!readonly}
        keyboard={!readonly}
        attributionControl={false}
        whenCreated={setMap}
        onClick={handleMapClick}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {location && (
          <Marker position={location} icon={markerIcon}>
            <Popup>Shipping Location</Popup>
          </Marker>
        )}
      </MapContainer>
      <button
        type="button"
        className={classes.find_location}
        onClick={handleFindLocation}
      >
        Find My Location
      </button>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.85296311625…nn%20Repair%20Group%20Inc.!5e0!3m2!1sen!2sus!4v1654119320609!5m2!1sen!2sus"
  width="100%"
  height="270"
  style={{ border: '0' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  data-rocket-lazyload="fitvidscompatible"
  data-lazy-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.852963116253!2d-73.992533!3d40.746335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c00ae6baafd593f!2sRossmann%20Repair%20Group%20Inc.!5e0!3m2!1sen!2sus!4v1654119320609!5m2!1sen!2sus"
  data-ll-status="loaded"
  className="entered lazyloaded"
/>

    </div>
  );
}
