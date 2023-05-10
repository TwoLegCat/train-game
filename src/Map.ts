export class Map {
    width: number;
    height : number;
    content : object[][] = [[{}]];
    //c:Array<Array<object>>
    constructor(x : number, y : number) {
        this.width = x;
        this.height = y;
    }
}