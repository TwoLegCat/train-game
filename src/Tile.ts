export default class Tile {
    pos: Array<number>;
    district: string;
    content : object = {};
    color: string;
    constructor(pos: Array<number>, district : string, color : string) {
        this.pos = pos;
        this.district = district;
        this.color = color;
    }
    /*setTiles(map : Array<Array<Tile>>) {
        const adjacentTiles = [
            [this.pos[0], this.pos[1] + 1],
            [this.pos[0], this.pos[1] - 1],
            [this.pos[0] + 1, this.pos[1]],
            [this.pos[0] - 1, this.pos[1]],
          ];
          
          for (const [x, y] of adjacentTiles) {
            if (typeof map[x][y] === null) {
              map[x][y].district = this.district;
            }
          }
    }*/
}