import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDB6O9FhEQt2y3D3KIKscQfVj4lgj7Hrbc",
  authDomain: "disneyplus-clone-b0e2f.firebaseapp.com",
  projectId: "disneyplus-clone-b0e2f",
  storageBucket: "disneyplus-clone-b0e2f.appspot.com",
  messagingSenderId: "447801916834",
  appId: "1:447801916834:web:70c2270ed375b9c850c6fb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default dbConfig;
