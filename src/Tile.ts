export default class Tile {
    x : number;
    y : number;
    district: string | null;
    content : object = {};
    constructor(x : number, y : number, district : string) {
        this.x = x;
        this.y = y;
        this.district = district;
    }
    setTiles(map : Array<Array<Tile>>) {
        /*if (map[this.x][this.y + 1].district === null)
        map[this.x][this.y + 1].district = this.district;
        if (map[this.x][this.y - 1].district === null)
        map[this.x][this.y - 1].district = this.district;
        if (map[this.x + 1][this.y].district === null)
        map[this.x + 1][this.y].district = this.district;
        if (map[this.x - 1][this.y].district === null)
        map[this.x - 1][this.y].district = this.district;*/
        
        
        const adjacentTiles = [
            [this.x, this.y + 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y],
            [this.x - 1, this.y],
          ];
          
          for (const [x, y] of adjacentTiles) {
            if (map[x]?.[y]?.district === null) {
              map[x][y].district = this.district;
            }
          }
    }
}