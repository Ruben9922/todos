import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAcOo4l1P-epjA7P1CKHtu_5AQQ9sRfIOY",
  authDomain: "ruben-dougall-todos.firebaseapp.com",
  databaseURL: "https://ruben-dougall-todos.firebaseio.com",
  projectId: "ruben-dougall-todos",
  storageBucket: "ruben-dougall-todos.appspot.com",
  messagingSenderId: "872048035344"
};
firebase.initializeApp(config);

export default firebase;
