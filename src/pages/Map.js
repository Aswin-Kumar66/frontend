import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './ContactUS.css'
mapboxgl.accessToken = 'pk.eyJ1Ijoia25pZ2h0aWl0cCIsImEiOiJjbDV6Y3E4djkwY3JqM2lyeWR5OWYwd2l1In0.SNn0dl19Csv4od0My_40ww';

export default function MapContainer() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(78.3458959017114);
  const [lat, setLat] = useState(17.493330101853466);
  const [zoom, setZoom] = useState(15);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}