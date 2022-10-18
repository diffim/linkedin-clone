import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD_REnroGrQU4WFrgB2yh5-eZkWCpkR8a4",
    authDomain: "linkedinclone-yt-diffin.firebaseapp.com",
    projectId: "linkedinclone-yt-diffin",
    storageBucket: "linkedinclone-yt-diffin.appspot.com",
    messagingSenderId: "860750574174",
    appId: "1:860750574174cd :web:b46dd036aae151cf4bbacf"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};