import Tile from './Tile';

export class Map {
    width: number;
    height : number;
    content : Array<Array<Tile>>;
    constructor(totalTiles: number, districtCount: number, ratio: number) {
        let exactWidth = (4 / 3) * Math.sqrt(totalTiles);
        let exactHeight = (3 * totalTiles) / (4 * Math.sqrt(totalTiles));

        let round = {
            n: [Math.round(exactWidth), Math.round(exactHeight)],
            type: "round"
        }
        let rx = Math.round(exactWidth);
        let ry = Math.round(exactHeight);
        let fx = Math.floor(exactWidth);
        let fy = Math.floor(exactHeight);
        let cx = Math.ceil(exactWidth);
        let cy = Math.ceil(exactHeight);


        this.content = Array(this.width).fill(Array(this.height).fill(null));
        console.log(this.content)
        
    }
}