import Tile from './Tile.js';
import District from './District.js';
import { createNoise2D } from 'simplex-noise';
const noise = createNoise2D();
console.log(noise(10, 10));
console.log(noise(11, 10));
export default class Map {
    width;
    height;
    content;
    districts = [];
    constructor(totalDesiredTiles, districtCount, ratio) {
        //*define width and height
        this.width = Math.ceil(Math.sqrt(totalDesiredTiles * 16 / 9));
        this.height = Math.ceil(Math.sqrt(totalDesiredTiles * 9 / 16));
        //let totalTiles = this.width * this.height;
        //let distanceBetweenStartTiles = Math.sqrt(totalTiles / districtCount) //TODO: still unclear, maybe too less space
        //*define names for districts
        let districtNames = [];
        let startTilePositions = [];
        //*create district names + first start pos of first district
        let chars = "abcdeghkmnopqrsuvwxyz";
        startTilePositions[0] = [~~(Math.random() * this.width), ~~(Math.random() * this.height)];
        districtNames[0] = `${chars[~~(Math.random() * chars.length)] + chars[~~(Math.random() * chars.length)]}`;
        while (startTilePositions.length < districtCount) {
            //let failed = false;
            let generatedName = `${chars[~~(Math.random() * chars.length)] + chars[~~(Math.random() * chars.length)]}`;
            if (!(districtNames.includes(generatedName))) {
                districtNames.push(generatedName);
                let rndpos = [~~(Math.random() * this.width), ~~(Math.random() * this.height)];
                /*for (let i = 0; i < startTilePositions.length; i++) {
                    if (Math.sqrt((rndpos[0] - startTilePositions[i][0])**2 + (rndpos[1] - startTilePositions[i][1])**2) > distanceBetweenStartTiles) {
                        console.log("random position passed random startTile")
                    } else {
                        failed = true;
                        districtNames.length -= 1;
                        console.error("random position was too close to antother startTile. Existing Positions: " + districtNames.length)
                        break;
                    }
                }*/
                //if(failed) continue;
                startTilePositions.push(rndpos);
            }
        }
        for (let i = 0; i < startTilePositions.length; i++) {
            this.districts[i] = new District(districtNames[i], startTilePositions[i]);
        }
        this.content = [];
        for (let x = 0; x < this.width; x++) {
            this.content[x] = [];
            for (let y = 0; y < this.height; y++) {
                let bestDistricts = [];
                for (let i = 0; i < this.districts.length; i++) {
                    bestDistricts[i] = { districtName: this.districts[i].name, distance: Math.sqrt((x - this.districts[i].startPos[0]) ** 2 + (y - this.districts[i].startPos[1]) ** 2) };
                }
                bestDistricts.sort((a, b) => a.distance - b.distance);
                this.content[x][y] = (new Tile([x, y], bestDistricts[0].districtName));
            }
        }
    }
}
//# sourceMappingURL=createMap.js.map