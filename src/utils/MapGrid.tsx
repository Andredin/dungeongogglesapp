import React from 'react';
import { Grid } from '../classes/Grid';
import { Rect } from 'react-konva';

type MapGridProps = {
    grid: Grid;
    width: number;
    height: number;
}

const MapGrid = (props: MapGridProps) => {
    
    const renderGrid = () => {
        const gridSizeY = props.grid.y()
        const gridSizeX = props.grid.x()

        // Size
        const rectangleSizeX = props.width / gridSizeX
        const rectangleSizeY = props.height / gridSizeY

        var rects = []
        for(var i = 0; i < gridSizeX; i++){
            for(var j = 0; j < gridSizeY; j++){
                if(props.grid.get(i, j) == 0){
                    // Position
                    var rectX = i * rectangleSizeX
                    var rectY = j * rectangleSizeY

                    // Rect
                    var rect = <Rect
                        x={rectX}
                        y={rectY}
                        width={rectangleSizeX}
                        height={rectangleSizeY}
                        fill='white'
                        stroke='white'
                        strokeWidth={1}
                    />
                    rects.push(rect)
                }
            }
        }

        return rects;
    }
    
    return (
        <React.Fragment>
            {renderGrid()}
        </React.Fragment>
    );
};

export default MapGrid;
