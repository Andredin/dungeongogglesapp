import 'firebase/firestore';

import firebase from 'firebase/app';

const FIREBASE_CONFIG = {
    "apiKey": "AIzaSyC-r7nYEX2d5RpKzIvGhfeVdogEi5AcIbI",
    "authDomain": "dungeon-goggles.firebaseapp.com",
    "databaseURL": "https://dungeon-goggles.firebaseio.com",
    "projectId": "dungeon-goggles",
    "storageBucket": "dungeon-goggles.appspot.com",
    "messagingSenderId": "796228271924",
    "appId": "1:796228271924:web:532f521e9f19308e71ef61",
    "measurementId": "G-W2K1R94HSS"
  }

firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.firestore();

const subscribeToDmMap = (dmId: any, cb: any) => {
    return db.collection('maps').doc('map-' + dmId).onSnapshot(snapshot => {
        snapshot.exists ? cb(null, snapshot.data()) : cb('Map not found');
    });
}

const subscribeToPlayerMap = async (playerId: any, cb: any) => {
    const host = 'http://' +  window.location.hostname + ':3000'
    const res = await fetch(host + `/api/getDmId/${playerId}`);
    const { dmId } = await res.json();
    
    subscribeToDmMap(dmId, cb);
}

const saveMapChanges = (dmId: any, changes: any) => {
    var mapRef = db.collection('maps').doc('map-' + dmId);
    return mapRef.set(changes, { merge: true });
}


export default {
    subscribeToDmMap,
    subscribeToPlayerMap,
    saveMapChanges
}