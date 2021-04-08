import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    	apiKey: "x",
        authDomain: "x",
        projectId: "x",
        storageBucket: "x",
        messagingSenderId: "x",
        appId: "x",
        measurementId: "x"
});
const db = firebaseApp.firestore();
export default db;