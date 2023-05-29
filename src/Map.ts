import Tile from './Tile';
import District from './District';
export class Map {
    width: number;
    height : number;
    content : Array<Array<Tile>>;
    districts: Array<District> = [];
    //districts : Array<Array<{name : string, tiles : number}>>;
    constructor(totalTiles: number, districtCount: number, distanceBetweenStartTiles: number, ratio: number) {
        //define width and height
        this.width = Math.ceil(Math.sqrt(totalTiles * 16/9));
        this.height = Math.ceil(Math.sqrt(totalTiles * 9/16));
        //initialize Map array
        this.content = Array(this.width).fill(Array(this.height).fill(null));
        
        console.log(this.width, this.height);
        //define names for districts
        let districtNames: Array<string> = [];
        let startTiles: Array<Array<number>> = [];
        let abc = "abcdefghijklmnopqrstuvwxyz";
        while (startTiles.length < districtCount) {
            let generatedName : string = `${abc[(Math.random() * abc.length)]}${abc[(Math.random() * abc.length)]}`;
            if (!districtNames.includes(generatedName)) {
                districtNames.push(generatedName)
                let rx = ~~(Math.random() * this.width);
                let ry = ~~(Math.random() * this.height);
                for (let i = 0; i < startTiles.length; i++) {
                    if (Math.sqrt((rx-startTiles[i][0])**2 + (ry-startTiles[i][1])**2) > distanceBetweenStartTiles) {
                        startTiles.push([rx, ry]);
                        this.content[rx][ry] = new Tile(rx, ry, generatedName);
                    }
                }

            }
        }
        for (let i = 0; i < startTiles.length; i++) {
            this.districts[i] = new District(districtNames[i], startTiles[i], 0)
        }
        
    }
}
console.log(new Map(4000, 10, 1, 1))