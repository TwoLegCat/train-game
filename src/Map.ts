export class Map {
    width: number;
    height : number;
    content : object[][] = [[{}]];
    constructor(x : number, y : number) {
        this.width = x;
        this.height = y;
    }
    create(districtCount: number, tpd: number, ratio: number) {
        let totalTiles = districtCount * tpd;  
        let nearestCleanTotalTiles = Math.round(Math.sqrt(tpd)) ** 2
        let divisors : Array<number> = [];
        for (let i = 1; i <= totalTiles; i++) {
            if (totalTiles % i === 0) {
                divisors.push(i);
            }
        }
            
          
        let map : Array<Array<number>> = Array(5).fill(Array(5).fill(0));
        
        console.log(map)
        let numTiles : Array<Array<number>> = [[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [3, 3, 3, 3, 3], [4, 4, 4, 4, 4], [5, 5, 5, 5, 5]];
        
        for (let i = 0; i < numTiles.length; i++) {
            for (let j = 0; j < numTiles[i].length; j++) {
                let area = Math.ceil(tpd ** (1/4))
            }
        }

    }
}