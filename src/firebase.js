import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAap0NqZwiynXfTzdRl85YY1EdiwKYv-6w",
  authDomain: "clone-3e0f8.firebaseapp.com",
  databaseURL: "https://clone-3e0f8.firebaseio.com",
  projectId: "clone-3e0f8",
  storageBucket: "clone-3e0f8.appspot.com",
  messagingSenderId: "245575374249",
  appId: "1:245575374249:web:d171174e28a833247120b8",
  measurementId: "G-ZVCBFDD7BD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
