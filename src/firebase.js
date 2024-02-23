// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDSP9czuRM_Fmt_oTVVUKuZ6nDuPHVHH6M",
  authDomain: "x-clone-aa1ed.firebaseapp.com",
  projectId: "x-clone-aa1ed",
  storageBucket: "x-clone-aa1ed.appspot.com",
  messagingSenderId: "667442424811",
  appId: "1:667442424811:web:097970c0c82c93c14b47ae"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Export auth, provider, storage, ref, uploadString, getDownloadURL, signInWithGoogle
export { auth, provider, storage, ref, uploadString, getDownloadURL };

// Export default db
export default db;
