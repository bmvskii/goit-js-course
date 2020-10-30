import firebase from 'firebase/app';
import 'firebase/firestore';

export default class Firebase {
  constructor() {
    this.config = {
      apiKey: 'AIzaSyCZ9VLMg22SaRiAIT1pmXEAmYu4oUN8bHw',
      authDomain: 'goit-a5f93.firebaseapp.com',
      databaseURL: 'https://goit-a5f93.firebaseio.com',
      projectId: 'goit-a5f93',
      storageBucket: 'goit-a5f93.appspot.com',
      messagingSenderId: '1024718146039',
      appId: '1:1024718146039:web:ce9cda74bc1620a85a86f2',
      measurementId: 'G-CMD74N3JDN',
    };
    this.isInitialized = false;
    this.database = null;

    this.init();
    this.createDB();
  }
  
  init() {
    firebase.initializeApp(this.config);
  }

  createDB() {
    this.database = firebase.firestore();
  }

  getDB() {
    return this.database;
  }
};
