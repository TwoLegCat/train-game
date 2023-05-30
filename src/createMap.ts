import Tile from './Tile';
import District from './District';
export default class Map {
    width: number;
    height : number;
    content : Array<Array<Tile>>;
    districts: Array<District> = [];
    constructor(tilesPerDistrict: number, districtCount: number, ratio?: number) {
        //define width and height
        let totalDesiredTiles = tilesPerDistrict * districtCount;
        this.width = Math.ceil(Math.sqrt(totalDesiredTiles * 16/9));
        this.height = Math.ceil(Math.sqrt(totalDesiredTiles * 9/16));
        let totalTiles = this.width * this.height;
        let distanceBetweenStartTiles = Math.sqrt(totalTiles / districtCount)
        //initialize Map array
        this.content = Array(this.width).fill(Array(this.height).fill(null));
        
        console.log(this.width, this.height);
        //define names for districts
        let districtNames: Array<string> = [];
        let startTilePositions: Array<Array<number>> = [];
        let chars = "abcdeghkmnopqrsuvwxyz";
        //too many districts,names,tiles?
        while (startTilePositions.length < districtCount) {
            let generatedName : string = `${chars[(Math.random() * chars.length)]}${chars[(Math.random() * chars.length)]}`;
            if (!districtNames.includes(generatedName)) {
                districtNames.push(generatedName);
                let rndpos = [~~(Math.random() * this.width), ~~(Math.random() * this.height)];
                for (let i = 0; i < startTilePositions.length; i++) {
                    if (Math.sqrt((rndpos[0]-startTilePositions[i][0])**2 + (rndpos[1]-startTilePositions[i][1])**2) > distanceBetweenStartTiles) {
                        startTilePositions.push(rndpos);
                        this.content[rndpos[0]][rndpos[1]] = new Tile(rndpos, generatedName);
                    } else {
                        districtNames.length -= 1;
                    }
                }
            }
        }
        for (let i = 0; i < startTilePositions.length; i++) {
            this.districts[i] = new District(districtNames[i], new Tile(startTilePositions[i], districtNames[i]));
        }
    }
}
