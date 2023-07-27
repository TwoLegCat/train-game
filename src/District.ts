export default class District {
    name: string;
    startPos: number[];
    tileAmount : number = 0;
    constructor(name: string, startPos: number[]) {
        this.name = name;
        this.startPos = startPos;
    }
}