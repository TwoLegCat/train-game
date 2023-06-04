import React, {useEffect, useRef, useState} from 'react';
import '../css/MapVisuals.css';
import Map from '../createMap' 
const colors : Array<Array<string>> = [
    [
        "#121221", "#1d252d", "#1f2344", "#19334c", "#192633", 
        "#b0c4d8", /*"#b3b3d5",*/ "#9c9cc9", /*"#8484bc",*/ "#6d6daf", 
        "#5858a1", /*"#4b4b8a",*/ "#3f3f73", /*"#32325c",*/ "#b7c4d1", 
        "#a1b2c3", /*"#8ca0b5",*/ "#768ea7", /*"#617c97",*/ "#536b82", 
        "#45596c", /*"#374756",*/ "#aeb3da", /*"#959ccf",*/ "#7d85c3", 
        "#646db8", /*"#4e58ab",*/ "#434b93", /*"#373f7a",*/ "#2c3262",
        "#a6c4e1", /*"#8bb3d9",*/ "#71a1d0", /*"#5681c7",*/ "#3d7ebc",
        "#356ca1", /*"#2c5a86",*/ "#23486b", /*"#98b2cc",*/ "#80a0c0", 
        "#688eb5", /*"#527ca7",*/ "#466b81", /*"#3a5977",*/ "#2e4751", 
        "#252545", /*"#19192e",*/ "#293541", /*"#1b232b",*/ "#212549", 
        "#161931", /*"#1a3650",*/ "#112435", /*"#233547",*/ "#17232f"
    ]
];
const map : Map = new Map(11000, 8, colors[0]);
function MapVisuals() {
    const [tileSize, setTileSize] = useState(16);
    
    
    const size = {width: map.width * tileSize, height: map.height * tileSize};
    const canvRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {//execute after first render once 
        const canvas = canvRef.current; if(!canvas) return;
        const ctx = canvas.getContext("2d"); if(!ctx) return;
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