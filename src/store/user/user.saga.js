import { takeLatest, call, put, all } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.type";

import { signInSuccess, signInFailed } from "./user.action";

import {
    getCurrentUser,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

//check session
export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(
            createUserDocumentFromAuth,
            userAuth,
            additionalDetails
        );
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

//google singin

export function* getSnapshotFromUserGoogle() {
    
        const userAuth = yield call(signInWithGooglePopup);
        console.log(userAuth);
}

export function* onSignInWithGoogle() {
    yield takeLatest(
        USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
        getSnapshotFromUserGoogle
    );
}

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onSignInWithGoogle)]);
}
