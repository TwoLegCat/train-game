export default class District {
    name: string;
    startTile: Array<number>;
    tileAmount: number;
    constructor(name: string, startTile: Array<number>, tileAmount: number) {
        this.name = name;
        this.startTile = startTile;
        this.tileAmount = tileAmount;
    }
}