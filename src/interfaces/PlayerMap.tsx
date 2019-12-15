import { Grid } from '../classes/Grid'

export interface PlayerMap {
    playerId: string | undefined;
    dmId: string;
    url: string;
    grid: Grid;
}