import { auth } from 'shared/services/firebase/firebase';
import { singleUserRef, profileImagesRef } from 'shared/services/firebase/firebaseRefs';

const defaultOptions = {
  isProvider: false, 
  isClient: false,
};

export const signup = (userData, options = defaultOptions) => {
  const { email, password } = userData;
  delete userData.email; 
  delete userData.password;
  const mergedOptions = Object.assign(defaultOptions, options);
  let user = { ...userData, ...mergedOptions };
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(async data => {
      const { uid } = data.user;
      const url = await setAvatar(uid, user.avatar);
      user.avatarUrl = url;
      singleUserRef(uid).set(user);
    })
    .catch(err => {
      err.type = 'ERROR';
      // eslint-disable-next-line no-console
      console.error(err);
    });
};

export const logIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const setAvatar = async (uid, file) => {
  const snapshot = await profileImagesRef(uid).put(file);
  const url = await snapshot.ref.getDownloadURL();
  return url;
};
