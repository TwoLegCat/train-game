import React, {useEffect, useRef, useState} from 'react';
import '../css/MapVisuals.css';
import Map from '../createMap' 
const map : Map = new Map(600, 3);
function MapVisuals() {
    const [tileSize, setTileSize] = useState(16);
    
    
    const size = {width: map.width * tileSize, height: map.height * tileSize};
    const canvRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {//execute after first render once 
        const canvas = canvRef.current; if(!canvas) return;
        const ctx = canvas.getContext("2d"); if(!ctx) return;
        console.log(map.content)
        for (let x = 0; x < map.width; x++) {
            for (let y = 0; y < map.height; y++) {
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
                ctx.fillStyle = map.content[x][y].color;
                
            }
        }
        console.log("H")
    }, [tileSize]);
    return(
        <canvas id="map" {...size} ref={canvRef} style={{border: "1px solid black"}}></canvas>
    );
}  

export default MapVisuals;