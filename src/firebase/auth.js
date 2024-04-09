import {
  createUserWithEmailAndPassword,
  // GoogleAuthProvider,
  signInWithEmailAndPassword,
  // signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase-config";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
//feauture
// export const doSignInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   const result = await signInWithPopup(auth, provider);
//   // result.user
//   return result;
// };

export const doSignOut = () => {
  return auth.SignOut();
};
//feauture
// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// }

// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password);
// }

// export const doSendEmailVerification = (email) => {
//     return SendEmailVerification(auth.currentUser, password, {
//         url: `${window.location.origin}/home`,
//     });
// }
