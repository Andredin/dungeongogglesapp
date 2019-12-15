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
import PlayerCanvas from '../utils/PlayerCanvas';

const PlayerTab = () => {
    
    const { playerId } = useParams()
    const [loading, setLoading] = useState(true)
    const [playerMap, setPlayerMap] = useState()

    useEffect(() => {
        //TODO: load PlayerMap
        setLoading(false)

        let playerMap: PlayerMap = { 
            playerId: playerId,
            dmId: '10',
            url: 'https://i.pinimg.com/originals/f3/36/d6/f336d62f3e5d87ffc6347e4563b0a1a1.jpg',
            grid: new Grid([[0]])
        }
        setPlayerMap(playerMap)
    }, [playerId])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Dungeon Goggles</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLoading isOpen={loading} message={'Loading...'} />
                {playerMap != undefined? <PlayerCanvas playerMap={playerMap}/> : ''}
            </IonContent>
        </IonPage>
    );
};

export default PlayerTab;
