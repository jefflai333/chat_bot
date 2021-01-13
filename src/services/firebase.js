import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsrRgRSd71Dp_yaGJOUJ6qpF2WdM314l0",
    authDomain: "chat-bot-b4fa1.firebaseapp.com",
    projectId: "chat-bot-b4fa1",
    storageBucket: "chat-bot-b4fa1.appspot.com",
    messagingSenderId: "625949605150",
    appId: "1:625949605150:web:fe0a7ee5f345d891a49d0f",
    measurementId: "G-915XNM93FJ"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth;
  export const db = firebase.database();