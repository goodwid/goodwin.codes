import { rtdb, fsdb, storage } from './firebase';

// REAL TIME DATABASE LIST REFS
/**
 * collection of all users
 */
export const usersRef = rtdb.ref('users');

// REAL TIME DATABASE OBJECT REFS
/**
 * Takes a user's ID and returns a single user object reference
 * @param {string} userId
 */
export const singleUserRef = userId => usersRef.child(userId);

// FIRESTORE COLLECTION REFERENCES
/**
 * Queryable reference to all the jobs
 */
export const jobsRef = fsdb.collection('jobs');

// FIRESTORE DOCUMENT REFERENCES
/**
 * Takes a job ID and returns a document reference
 * @param {string} jobId
 */
export const singleJobRef = jobId => jobsRef.doc(jobId);

// STORAGE REFS
/**
 * Reference to all the profile images in the database
 */
export const profileImagesRef = uid => storage.ref(`/profileImages/${uid}`);

/**
 * Reference to an individual user's profile image storage ref.
 * @param {string} userId
 */
export const singleProfileImageRef = userId => profileImagesRef.child(userId);
