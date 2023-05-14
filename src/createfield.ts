const defineDimensions = (districtCount: number, tpd: number, ratio: number): Array<number> => {
    let totalArea : number = districtCount * tpd /** (ratio + 1); */
    let length : number = Math.round(4 * Math.sqrt(totalArea) / 3);
    let height : number = Math.round(3 * Math.sqrt(totalArea) / 4);
    let obstructions : number = length * height - districtCount * tpd;
    return [length, height, obstructions];
}
console.log(defineDimensions(26, 200, 0.2))
