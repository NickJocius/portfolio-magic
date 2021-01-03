import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDHBZ2HA2x5zZEDEFf0zrn8aeNFU0WL9CY",
    authDomain: "booking-ff726.firebaseapp.com",
    projectId: "booking-ff726",
    storageBucket: "booking-ff726.appspot.com",
    messagingSenderId: "660707561036",
    appId: "1:660707561036:web:4b2a2437a18c27247e2ee9"
};
// Initialize Firebase
// need to check firebase when using nextjs
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

