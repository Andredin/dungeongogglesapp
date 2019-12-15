export class Grid {
    values: number[][]

    constructor(values: number[][]) {
        this.values = values;
    }

    get(x: number, y: number): number {
        return this.values[y][x];
    }

    y(): number {
        return this.values.length;
    }

    x(): number {
        return this.values.length > 0? this.values[0].length : 0;
    }

}