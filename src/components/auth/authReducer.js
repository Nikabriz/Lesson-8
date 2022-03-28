import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

const initialState = {
    inAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IN-AUTH' : {
            return {...state, inAuth: action.inAuth}
        }
        default:
            return state;
    }
}

//ACTION CREATER
export const changeInAuth = (inAuth) => {
    return {
        type: 'IN-AUTH', inAuth
    }
}

//THUNK
export const createUserTC = (email, password) => async (dispatch) => {
    const auth = getAuth();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        dispatch(changeInAuth(true))
        const user = userCredential.user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }

}

export const signInTC = (email, password) => async (dispatch) => {
    const auth = getAuth();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        dispatch(changeInAuth(true))
        const user = userCredential.user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }


}

export const signOutTC = () => async (dispatch) => {
    const auth = getAuth();

    try {
        const singOut = await signOut(auth)
        dispatch(changeInAuth(false))
    } catch (error) {

    }
}
