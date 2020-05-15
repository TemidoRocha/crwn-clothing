import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const DATABASE_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const MESSAGE_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID;
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
const MEASUREMENT_ID = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // for training:
  // const collectionRef = firestore.collection('users');
  // const collectionSnapshot = await collectionRef.get();
  // console.log({collection: collectionSnapshot.docs.map(doc=>doc.data())});

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error createing user', error.message);
    }
  }
  return userRef;
};

//this function is to turn the array we get from the firebase and transform  it in an object
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedColelction = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()), //JS method where you pass a string and gives you back a string that a url can be read
      id: doc.id,
      title,
      items,
    };
  });

  return transformedColelction.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); //if we pass sth inside doc it will set as the key, if we leave empty firefox will automatically generate a key
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//this getCurrentUser is just to mimick functionality that we may encounter when we odnt use firebase as the backend
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
