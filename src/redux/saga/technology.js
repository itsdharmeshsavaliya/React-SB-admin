import { getTechnologyAPI } from "helpers/jwt-token-access/api";
import  getTechnologySlice  from "redux/slice/technology";
import { GET_TECHNOLOGY } from "redux/Types";
import {put,takeEvery} from 'redux-saga/effects';

export function* getTechnologySaga() {
    const technology = yield getTechnologyAPI()
    yield put(getTechnologySlice(technology.data))
}

export function* watchTechnologyAsync() {
    yield takeEvery(GET_TECHNOLOGY,getTechnologySaga)
}