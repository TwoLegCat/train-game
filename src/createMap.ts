import Tile from './Tile';
import District from './District';
export default class Map {
    width: number;
    height : number;
    content : Array<Array<Tile>>;
    districts : Array<District> = [];
    colors: Array<string>;
    constructor(totalDesiredTiles: number, districtCount: number, colors : Array<string>, ratio?: number) {
        //define width and height
        this.width = Math.ceil(Math.sqrt(totalDesiredTiles * 16/9));
        this.height = Math.ceil(Math.sqrt(totalDesiredTiles * 9/16));
        this.colors = colors
        let totalTiles = this.width * this.height;
        let distanceBetweenStartTiles = Math.sqrt(totalTiles / districtCount) //TODO: still unclear, maybe too less space
        //define names for districts
        let districtNames: Array<string> = [];
        let startTilePositions: Array<Array<number>> = [];
        let chars = "abcdeghkmnopqrsuvwxyz";
        //too many districts,names,tiles?
        startTilePositions[0] = [~~(Math.random() * this.width), ~~(Math.random() * this.height)];
        districtNames[0] = `${chars[~~(Math.random() * chars.length)] + chars[~~(Math.random() * chars.length)]}`;
        let failed = false;
        while (startTilePositions.length < districtCount) {
            let generatedName : string = `${chars[~~(Math.random() * chars.length)] + chars[~~(Math.random() * chars.length)]}`;
            if (!(districtNames.includes(generatedName))) {
                districtNames.push(generatedName);
                let rndpos = [~~(Math.random() * this.width), ~~(Math.random() * this.height)];
                
                for (let i = 0; i < startTilePositions.length; i++) {
                    if (Math.sqrt((rndpos[0] - startTilePositions[i][0])**2 + (rndpos[1] - startTilePositions[i][1])**2) > distanceBetweenStartTiles) {
                        console.log("random position passed random startTile")
                      
                    } else {
                        failed = true;
                        districtNames.length -= 1;
                        console.error("random position was too close to antother startTile. Existing Positions: " + districtNames.length)
                        break;
                    }
                }
                if(failed) {failed = false; continue}
                startTilePositions.push(rndpos);
                console.warn("New Tile was created. Existing Positions: " + startTilePositions.length)
            }
        }
        for (let i = 0; i < startTilePositions.length; i++) {
            this.districts[i] = new District(districtNames[i], new Tile(startTilePositions[i], districtNames[i], colors[i]), colors[i]);
        }
        this.content = [];
        for (let x = 0; x < this.width; x++) {
            this.content[x] = [];
            for (let y = 0; y < this.height; y++) {
                let bestDistricts : Array<{districtName : string, districtColor: string, distance : number}> = [];
                for (let i = 0; i < this.districts.length; i++) {
                    bestDistricts[i] = {districtName: this.districts[i].name, districtColor: this.districts[i].color, distance: Math.sqrt((x - this.districts[i].startTile.pos[0]) ** 2 + (y - this.districts[i].startTile.pos[1]) ** 2)}
                }
                bestDistricts.sort((a, b) => a.distance - b.distance);
                this.content[x][y] = (new Tile([x, y], bestDistricts[0].districtName, bestDistricts[0].districtColor));
            }
        }
    }
}
