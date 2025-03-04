import { signInWithGoogle, registerUserWithEmailAndPassword, sinInByEmailAndPassword, signOutFirebase } from "../../firebase/providers";
import { checkCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkCredentials());
    }
};

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkCredentials());
        await signInWithGoogle()
            .then((result) => {
                if (!result.ok) return dispatch(logout( result ));
                
                dispatch(login(result));
            });
    }
};

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkCredentials());
        await registerUserWithEmailAndPassword({email, password, displayName})
            .then((result) => {
                console.log(result);
                if (!result.ok) return dispatch(logout( result ));
                
                dispatch(login(result));
            });
        }
};

export const startSingInByEmailAndPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkCredentials());
        await sinInByEmailAndPassword({email, password})
            .then((result) => {
                if (!result.ok) return dispatch(logout( result ));
                dispatch(login(result));
            });
    }
};

export const startLogOutSession = () => {
    return async (dispatch) => {
        await signOutFirebase()
            .then((result) => {
                if (!result.ok) return dispatch(logout( result ));
                dispatch(logout());
            });
        
    }
}