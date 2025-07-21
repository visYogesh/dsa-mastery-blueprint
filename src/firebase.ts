import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbTYCK_jzvDCWozr5QbiIMqdqbjZdI2Jc",
  authDomain: "ds-algo-70685.firebaseapp.com",
  projectId: "ds-algo-70685",
  storageBucket: "ds-algo-70685.appspot.com",
  messagingSenderId: "343528141114",
  appId: "1:343528141114:web:d42c56b3778be952692003",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Google Provider
export const googleProvider = new GoogleAuthProvider();

// GitHub Provider
export const githubProvider = new GithubAuthProvider();
githubProvider.addScope("read:user");
githubProvider.addScope("user:email");

