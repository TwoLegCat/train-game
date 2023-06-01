import React from 'react';
import './Map.css';
import mapConstruct from '../createMap' 
const map: mapConstruct = new mapConstruct(10000, 26);

function Map() {
    let tileSize = 16;
    const size = {width: map.width * tileSize, height: map.height * tileSize}
    return(
        <canvas id="map" {...size} ></canvas>
    );
}

export default Map;