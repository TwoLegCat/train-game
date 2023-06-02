import React from 'react';
import './Map.css';
import mapConstruct from '../createMap' 
const map: mapConstruct = new mapConstruct(10000, 26);

function Map() {
    const [tileSize, setTileSize] = useState(16);
    const size = {width: map.width * tileSize, height: map.height * tileSize}
    const canvRef = useRef(null);
    return(
        <canvas id="map" {...size} ref={canvRef}></canvas>
    );
}  

export default Map;