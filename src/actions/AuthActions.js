import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER,
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text,
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text,
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => onLoginUserSuccess(dispatch, user))
            .catch((loginError) => {
                console.log(loginError);

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => onLoginUserSuccess(dispatch, user))
                    .catch((createError) => {
                        console.log(createError);
                        onLoginUserFail(dispatch);
                    });
            });
    };
};

const onLoginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    Actions.mainFlow();
};

const onLoginUserFail = dispatch => dispatch({ type: LOGIN_USER_FAIL });
