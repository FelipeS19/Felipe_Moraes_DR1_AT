// src/utils/FakeLogin.js

import { signInWithEmailAndPassword } from '../firebase'; // Importe o método correto do Firebase
import { auth } from '../firebase'; // Importe o auth do firebase.js

export const fakeLogin = (username, password) => {
  return signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      return { success: true, message: 'Login successful' };
    })
    .catch((error) => {
      let errorMessage = 'Login failed';
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        errorMessage = 'Invalid username or password';
      }
      throw new Error(errorMessage);
    });
};
