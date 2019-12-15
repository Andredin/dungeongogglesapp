export class Grid {
    values: number[][]

    constructor(values: number[][]) {
        this.values = values;
    }

    get(x: number, y: number): number {
        return this.values[x][y];
    }

}