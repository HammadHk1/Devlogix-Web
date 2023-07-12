// //Importing Firebase to setup the server....
// import firebase from "firebase/app";
// import 'firebase/auth'
// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

// export const auth = app.auth()
// export default app
// Import the functions you need from the SDKs you need
// import { initializeApp } from "./firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import 
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC2sMxIEkqJ8mxb8744ZxWiBEICXqlTF5A",
//   authDomain: "devlogix-sample.firebaseapp.com",
//   projectId: "devlogix-sample",
//   storageBucket: "devlogix-sample.appspot.com",
//   messagingSenderId: "376366115154",
//   appId: "1:376366115154:web:8fe5c2a009e184e69d328b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//Importing Firebase to setup the server....
import firebase from "firebase/app";
import 'firebase/auth'
//Intializing the App with specified keys given by Firebase....
const app = firebase.initializeApp({
  apiKey: "AIzaSyC2sMxIEkqJ8mxb8744ZxWiBEICXqlTF5A",
  authDomain: "devlogix-sample.firebaseapp.com",
  projectId: "devlogix-sample",
  storageBucket: "devlogix-sample.appspot.com",
  messagingSenderId: "376366115154",
  appId: "1:376366115154:web:8fe5c2a009e184e69d328b"
});
export const auth = app.auth();
export default app;