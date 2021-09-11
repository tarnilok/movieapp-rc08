import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBwZP3EN2NgVl82wTM167Al1ZjLJdHgsPM",
  authDomain: "movieapp-d25a3.firebaseapp.com",
  projectId: "movieapp-d25a3",
  storageBucket: "movieapp-d25a3.appspot.com",
  messagingSenderId: "1071944530466",
  appId: "1:1071944530466:web:611777a5480f619399687b",
  measurementId: "G-B5PVNVHHP5"
});

export const createUser = async (email, password, displayName) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
      });

    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName });
    alert(currentUser);
  } catch (error) {
    alert(
      "There exists an account with this email. Please login with your password or continue with Google!"
    );
  }
};

export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      // var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      alert("The password is invalid or the user does not have a password!");
    });
};

export const signOut = () => {
  firebase.auth().signOut();
};

export const userObserver = async (setCurrentUser) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};

export const signUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithPopup(provider);
};

export const forgotPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email);

  alert("Please check your mail box!");
};

export default firebaseApp;