import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { book, happy } from 'ionicons/icons';

const HomeTab = () => {
    const [playerId,setPlayerId] = useState()

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Dungeon Goggles</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard className="welcome-card">
                    <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/235/315/315/636284736878181910.jpeg" alt="" />
                    <IonCardHeader>
                        <IonCardSubtitle>Take a seat</IonCardSubtitle>
                        <IonCardTitle>Welcome</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>
                            Nice to have you here. To open a map, ask your dm for the link. Good loot <IonIcon icon={happy} />
                        </p>
                        
                        {/*-- Inputs with labels --*/}
                        <IonItem>
                            <IonLabel>Player Id</IonLabel>
                            <IonInput value={playerId} onIonChange={(e) => {setPlayerId(e.detail.value)}}></IonInput>
                            <IonButton href={'/player/' + playerId}>Open</IonButton>
                        </IonItem>
                    </IonCardContent>
                </IonCard>

                <IonList lines="none">
                    <IonListHeader>
                        <IonLabel>Dnd Beyond</IonLabel>
                    </IonListHeader>
                    <IonItem href="https://www.dndbeyond.com/" target="_blank">
                        <IonIcon slot="start" color="medium" icon={book} />
                        <IonLabel>DnD Beyond</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/player/fe5bf503-bc31-453d-89a3-df21901ad0a0">
                        <IonIcon slot="start" color="medium" icon={book} />
                        <IonLabel>Test</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default HomeTab;
