import Tile from './Tile';
import District from './District';
export default class Map {
    width: number;
    height : number;
    content : Array<Array<Tile>>;
    districts: Array<District> = [];
    constructor(totalDesiredTiles: number, districtCount: number, ratio?: number) {
        //define width and height
        this.width = Math.ceil(Math.sqrt(totalDesiredTiles * 16/9));
        this.height = Math.ceil(Math.sqrt(totalDesiredTiles * 9/16));
        let totalTiles = this.width * this.height;
        let distanceBetweenStartTiles = Math.sqrt(totalTiles / districtCount) //TODO: still unclear, maybe too less space
        //initialize Map array
        this.content = Array(this.width).fill(Array(this.height).fill(null));
        console.log(this.content);
        //define names for districts
        let districtNames: Array<string> = [];
        let startTilePositions: Array<Array<number>> = [];
        let chars = "abcdeghkmnopqrsuvwxyz";
        const colors : Array<string> = ["#121221", "1d252d", "1f2344"];
        //too many districts,names,tiles?
        startTilePositions[0] = [~~(Math.random() * this.width), ~~(Math.random() * this.height)];
        console.log(startTilePositions)
        districtNames[0] = `${chars[~~(Math.random() * chars.length)] + chars[~~(Math.random() * chars.length)]}`;
        console.log(districtNames);
        let failed = false;
        while (startTilePositions.length < districtCount) {
            let generatedName : string = `${chars[~~(Math.random() * chars.length)] + chars[~~(Math.random() * chars.length)]}`;
            console.log(generatedName)
            if (!(districtNames.includes(generatedName))) {
                districtNames.push(generatedName);
                console.log(districtNames.length)
                let rndpos = [~~(Math.random() * this.width), ~~(Math.random() * this.height)];
                
                for (let i = 0; i < startTilePositions.length; i++) {
                    console.log("i=" + i);
                    if (Math.sqrt((rndpos[0] - startTilePositions[i][0])**2 + (rndpos[1] - startTilePositions[i][1])**2) > distanceBetweenStartTiles) {
                        console.log("Success")
                      
                    } else {
                        failed = true;
                        districtNames.length -= 1;
                        break;
                    }
                }
                if(failed) {failed = false; continue}
                console.log("new tile created wse")
                startTilePositions.push(rndpos);
                this.content[rndpos[0]][rndpos[1]] = new Tile(rndpos, generatedName);
                //this.districts.push(new District(generatedName, this.content[rndpos[0]][rndpos[1]]))
                
            }
        }
        for (let i = 0; i < startTilePositions.length; i++) {
            this.districts[i] = new District(districtNames[i], new Tile(startTilePositions[i], districtNames[i]), colors[i]);
        }
        console.log(this.districts)
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let districtsCopy : Array<District> = [...this.districts];
                let distances : Array<{districtName:string,distance:number}> = [];
                for (let i = 0; i < districtsCopy.length; i++) {
                    distances[i] = {districtName: districtsCopy[i].name, distance: Math.sqrt((x-districtsCopy[i].startTile.pos[0])**2 + (y-districtsCopy[i].startTile.pos[1])**2)}
                }
                distances.sort((a, b) => a.distance - b.distance);
                //console.log(distances);
                console.log("x:" + x)
                this.content[x][y] = new Tile([x, y], distances[0].districtName)
            }
        }
        console.log(this.content)
    }
}
