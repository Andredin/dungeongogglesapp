import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSpinner,
    IonLoading
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Grid } from '../classes/Grid';
import { PlayerMap } from '../interfaces/PlayerMap';

type PlayerCanvasProps = {
    playerMap: PlayerMap;
}

const PlayerCanvas = (props: PlayerCanvasProps) => {
    
    return (
        <div>TODO</div>
    );

};

export default PlayerCanvas;
