import Tile from "./Tile"
export default class District {
    name: string;
    startTile: Tile;
    tileAmount : number = 0;
    color : string;
    constructor(name: string, startTile: Tile, color: string) {
        this.name = name;
        this.startTile = startTile;
        this.color = color;
    }
}