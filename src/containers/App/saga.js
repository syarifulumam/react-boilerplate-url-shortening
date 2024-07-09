import { takeLatest, call, put, select } from 'redux-saga/effects';

import { getData, getCountryList, postShortLink } from '@domain/api';
import { showPopup, setLoading, setData, setCountryList, setShortLink } from '@containers/App/actions';
import { GET_DATA, GET_COUNTRY_LIST, POST_SHORT_LINK } from '@containers/App/constants';
import { selectShortLink } from './selectors';

function* doGetData() {
  yield put(setLoading(true));
  try {
    const response = yield call(getData);
    if (response) {
      yield put(setData(response.data));
    }
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

function* doGetCountryList() {
  yield put(setLoading(true));
  try {
    const response = yield call(getCountryList);
    if (response) {
      yield put(setCountryList(response));
    }
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

function* doPostShortLink({ data }) {
  yield put(setLoading(true));
  const shortLink = yield select(selectShortLink);
  try {
    const response = yield call(postShortLink, data);
    if (response) {
      yield put(setShortLink([...shortLink, response]));
    }
  } catch (error) {
    yield put(showPopup(error.message));
  }
  yield put(setLoading(false));
}

export default function* appSaga() {
  yield takeLatest(GET_DATA, doGetData);
  yield takeLatest(GET_COUNTRY_LIST, doGetCountryList);
  yield takeLatest(POST_SHORT_LINK, doPostShortLink);
}
