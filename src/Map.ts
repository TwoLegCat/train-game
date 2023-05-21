export class Map {
    width: number;
    height : number;
    content : Array<Array<object>>;
    constructor(totalTiles: number, districtCount: number, ratio: number) {
        this.width = (4/3)*Math.sqrt(totalTiles);
        this.height = (3*totalTiles)/(4*Math.sqrt(totalTiles));
        this.content = Array(this.width).fill(Array(this.height).fill(0));
        console.log(this.content)
        
    }
}