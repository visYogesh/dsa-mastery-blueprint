import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

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
githubProvider.addScope("user:email");
githubProvider.addScope("read:user");

// Phone Authentication Helpers
export const setupRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
  });
};

export const sendOTP = async (phoneNumber) => {
  if (!window.recaptchaVerifier) setupRecaptcha();
  return signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
};
