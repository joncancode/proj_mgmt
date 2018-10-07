import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAfJ5BDToWZE4HVmoA2-Wn1eS1hxT_EFzE',
  authDomain: 'mgmt-4399a.firebaseapp.com',
  databaseURL: 'https://mgmt-4399a.firebaseio.com',
  projectId: 'mgmt-4399a',
  storageBucket: 'mgmt-4399a.appspot.com',
  messagingSenderId: '840513714521'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
