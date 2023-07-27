export default class Tile {
    pos: Array<number>;
    district: string;
    content : object = {};
    constructor(pos: Array<number>, district : string) {
        this.pos = pos;
        this.district = district;
    }
}