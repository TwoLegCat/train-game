import Tile from './Tile.js';
import District from './District.js';
export default class Map {
    width: number;
    height: number;
    content: Array<Array<Tile>>;
    districts: Array<District>;
    constructor(totalDesiredTiles: number, districtCount: number, ratio?: number);
}
//# sourceMappingURL=createMap.d.ts.map