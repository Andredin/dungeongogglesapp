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
  IonToolbar
} from '@ionic/react';
import { book, happy } from 'ionicons/icons';
import React from 'react';

const HomeTab = () => {
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
                <IonItem routerLink="/player/100">
                    <IonIcon slot="start" color="medium" icon={book} />
                    <IonLabel>Test</IonLabel>
                </IonItem>
            </IonList>
        </IonContent>
    </IonPage>
  );
};

export default HomeTab;
