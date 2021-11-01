import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA8LHlroZruZ8RhV4eNRuEtnD4A4GlHyLM",
  authDomain: "secondtonone-demo.firebaseapp.com",
  projectId: "secondtonone-demo",
  storageBucket: "secondtonone-demo.appspot.com",
  messagingSenderId: "163491455379",
  appId: "1:163491455379:web:c35d417bf694d369524866",
  measurementId: "G-KNYJFFCFCN"
};
firebase.initializeApp(firebaseConfig);

export default firebase