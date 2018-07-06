import * as firebase from 'firebase';

const config = {
     // Initialize Firebase
    apiKey: "AIzaSyDYlEVRc004AJMfZZ7ULIwECBHTCq9_t2M",
    authDomain: "budgetfy-jme.firebaseapp.com",
    databaseURL: "https://budgetfy-jme.firebaseio.com",
    projectId: "budgetfy-jme",
    storageBucket: "budgetfy-jme.appspot.com",
    messagingSenderId: "635194965504"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };