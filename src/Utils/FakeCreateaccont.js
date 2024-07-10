// src/utils/FakeCreate.js

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return { success: true, message: 'Account created successfully', user: userCredential.user };
        })
        .catch((error) => {
            let errorMessage = 'Registration failed';
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'Email already in use';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'Weak password';
            }
            throw new Error(errorMessage);
        });
};
