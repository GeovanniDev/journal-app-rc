import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAppAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAppAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({user});
        const { displayName, email, photoURL, uid } = result.user;

        return { 
            ok: true, 
            displayName, 
            email, 
            photoURL, 
            uid 
        };

    } catch (error) {
        return { 
            ok: false,
            errorMessage: `${error.code} / ${error.message}`
        };
    }
};

export const registerUserWithEmailAndPassword = async ({email: mail, password, displayName}) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAppAuth, mail, password);
        const { uid, photoURL, email } = result.user;
        await updateProfile( FirebaseAppAuth.currentUser, { displayName });

        return { 
            ok: true, 
            email, 
            photoURL, 
            uid,
            displayName
        };

    } catch (error) {
        return { 
            ok: false,
            errorMessage: `${error.code} / ${error.message}`
        };
    }
    
};

export const sinInByEmailAndPassword = async ({email: mail, password}) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAppAuth, mail, password);
        const { uid, photoURL, email, displayName } = result.user;

        return { 
            ok: true, 
            email, 
            photoURL, 
            uid,
            displayName
        };

    } catch (error) {
        return { 
            ok: false,
            errorMessage: `${error.code} / ${error.message}`
        };
    }
};

export const signOutFirebase = async () => {
    try {
        await FirebaseAppAuth.signOut();
        return { ok: true };
    } catch (error) {
        return { 
            ok: false,
            errorMessage: `${error.code} / ${error.message}`
        };
    }
};