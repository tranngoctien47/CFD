

import { takeLatest } from 'redux-saga/effects'
import { fetchLogin, logout } from "./authSaga";
import { AUTH } from "../reducers/authReducer";



export default function* mySaga() {
    yield takeLatest(AUTH.fetchLogin, fetchLogin)
    yield takeLatest(AUTH.logout, logout)
}