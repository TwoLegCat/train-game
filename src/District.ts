import Tile from "./Tile"
export default class District {
    name: string;
    startTile: Tile;
    tileAmount : number = 0;
    constructor(name: string, startTile: Tile) {
        this.name = name;
        this.startTile = startTile;
    }
}