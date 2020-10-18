import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCg9uGVDZsnLF_HIM1MJAhBYqXHzdH49Kk",
    authDomain: "tik-tok-clone-d777b.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-d777b.firebaseio.com",
    projectId: "tik-tok-clone-d777b",
    storageBucket: "tik-tok-clone-d777b.appspot.com",
    messagingSenderId: "142199449760",
    appId: "1:142199449760:web:885fcfd8c913578d13c1c5"
  };

  const firebaseApp = {
    firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();

    export default db;
    
  }