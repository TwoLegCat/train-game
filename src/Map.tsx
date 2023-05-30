import React from 'react';
import './Map.css';
import mapConstruct from './createMap' 
const map: mapConstruct = new mapConstruct(10000, 26);

function Map() {
    return(
        <canvas id="map"></canvas>
    );
}

export default Map;