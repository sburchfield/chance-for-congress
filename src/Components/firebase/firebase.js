import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDL3qRWVXHPgjDtI-ohl6xTHC_GWAjKZAE",
  authDomain: "chance-for-congress.firebaseapp.com",
  databaseURL: "https://chance-for-congress.firebaseio.com",
  projectId: "chance-for-congress",
  storageBucket: "chance-for-congress.appspot.com",
  messagingSenderId: "30090287233",
  appId: "1:30090287233:web:32e828d33b7518eb4bd580",
  measurementId: "G-DQMBP7HWSC"
};

firebase.initializeApp(config);

export default firebase
