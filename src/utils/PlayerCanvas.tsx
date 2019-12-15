import React from 'react';
import { PlayerMap } from '../interfaces/PlayerMap';
import { Stage, Layer, Image  } from 'react-konva';
import useImage from 'use-image';
import Konva from 'konva';
import MapGrid from './MapGrid';

type PlayerCanvasProps = {
    playerMap: PlayerMap;
}

const PlayerCanvas = (props: PlayerCanvasProps) => {
    const [image] = useImage(props.playerMap.url);

    const stageDragBounds = (pos: Konva.Vector2d) : Konva.Vector2d => {
        if(image == undefined){
            return pos;
        }

        // Limit draggable region considering image and screen size
        const toolbarHeight = 56
        const posX = Math.max(Math.min(pos.x, 0), Math.min(-image.width + window.innerWidth, 0))
        const posY = Math.max(Math.min(pos.y, 0), Math.min(-image.height - toolbarHeight + window.innerHeight, 0))
        return {
            x: posX,
            y: posY
        }
    }

    return (
        image != undefined?
            <Stage width={image.width} height={image.height} draggable dragBoundFunc={stageDragBounds}>
                <Layer>
                    <Image image={image} />
                </Layer>
                <Layer>
                    <MapGrid width={image.width} height={image.height} grid={props.playerMap.grid} />
                </Layer>
            </Stage>:
            <div />
    );
};

export default PlayerCanvas;
