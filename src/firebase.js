import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyClulPbsBNFPoBoZiQh_UJl6FW_Aocnq4k",
    authDomain: "disney-clone-72fba.firebaseapp.com",
    projectId: "disney-clone-72fba",
    storageBucket: "disney-clone-72fba.appspot.com",
    messagingSenderId: "903426820622",
    appId: "1:903426820622:web:c821709913e32734b74a5f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
