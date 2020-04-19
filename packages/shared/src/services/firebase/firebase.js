import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import { firebase as config } from 'root/app.config';



export const app = firebase.initializeApp(config);

export const rtdb = firebase.database();
export const fsdb = firebase.firestore();
export const fbAuth = firebase.auth;
export const auth = firebase.auth();
export const storage = firebase.storage();

/**
 * Populates server-side timestamp for Firestore document properties
 * Works a little different from what may be expected so check the docs
 */
export const fsServerTimestamp = firebase.firestore.FieldValue.serverTimestamp();

/**
 * Just a type that contains useful methods to witk with Firestore timestamp. Look at the docs...
 */
export const fsTimestamp = firebase.firestore.Timestamp;

/**
 * Populates server-side timestamp for realtime database values
 * Standard old-school POJO date (milliseconds since Unix epoch)
 */
export const rtTimestamp = firebase.database.ServerValue.TIMESTAMP;
