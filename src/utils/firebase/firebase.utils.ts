import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtGu1D1BzYhm3ZZrgbQFq-vOgZkb8kz98",
  authDomain: "crwn-clothing-db-aa014.firebaseapp.com",
  projectId: "crwn-clothing-db-aa014",
  storageBucket: "crwn-clothing-db-aa014.appspot.com",
  messagingSenderId: "652157692532",
  appId: "1:652157692532:web:68a7aecf973861a2f6ff21"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: any) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch(error: any) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}
