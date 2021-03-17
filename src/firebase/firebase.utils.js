import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDty6IFkiQnLEmXwUs1ea_jNwCYMuCvpC8',
  authDomain: 'khayal-ba8b7.firebaseapp.com',
  projectId: 'khayal-ba8b7',
  storageBucket: 'khayal-ba8b7.appspot.com',
  messagingSenderId: '1064060883433',
  appId: '1:1064060883433:web:d53219fad2aa7bb345bb78',
});

const db = firebaseApp.firestore();


export default db;
