// import everything from firebase
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-jNOdt34-XvD1IFwV9qTtF3_tT_AivcE",
    authDomain: "reyofsun-d4d99.firebaseapp.com",
    projectId: "reyofsun-d4d99",
    storageBucket: "reyofsun-d4d99.appspot.com",
    messagingSenderId: "146023110767",
    appId: "1:146023110767:web:61f0604215c53270eb959a",
    measurementId: "G-4BWDQ33P6B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    if ('measurmentId' in firebaseConfig) firebase.analytics();
}
 */

// export auth
export const auth = firebase.default.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
