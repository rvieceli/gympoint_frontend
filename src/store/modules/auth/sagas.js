import { all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

import { SIGN_IN_SUCCESS } from './actions';

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(SIGN_IN_SUCCESS, setToken),
]);
