import { takeLatest, call, put, all } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.type";

import { signInSuccess, signInFailed } from "./user.action";

import {
    getCurrentUser,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
    } catch (error) {}
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION);
}

export function* userSagas() {
    yield all([]);
}
