import { call,put,takeEvery } from "redux-saga/effects";
import { ADD_FUTURE, DELETE_FUTURE, GET_FUTURE, GET_FUTURE_INFO, UPDATE_FUTURE } from "./actionTypes";
import { addFutureFail, addFutureSuccess, deleteFutureFail, deleteFutureSuccess, getFutureFail, getFutureInfoFail, getFutureInfoSuccess, getFutureSuccess, updateFutureFail, updateFutureSuccess } from "./actions";

import { addFuture, deleteFuture, getFuture, getFutureInfo, updateFuture } from "helpers/fakebackend_helper";

function* fetchFuture() {
    try{
        const response = yield call(getFuture)
        yield put(getFutureSuccess(response))
    }catch(error){
        yield put(getFutureFail(error))
    }
}

function* onaddFuture({ payload: futureinfo}){
    try{
        const response = yield call(addFuture,futureinfo)
        yield put(addFutureSuccess(response))
    }catch({response}){
        yield put(addFutureFail(response))
    }
}

function* onupdateFuture({ payload: futureinfo}){
    try{
        const response = yield call(updateFuture,futureinfo)
        yield put(updateFutureSuccess(response))
    }catch({response}){
        yield put(updateFutureFail(response))
    }
}

function* ongetFutureInfo({payload: id}){
    try{
        const response = yield call(getFutureInfo,id)
        yield put(getFutureInfoSuccess(response))
    }catch(error){
        yield put(getFutureInfoFail(error))
    }
}

function* ondeleteFuture({ payload: futureinfo}){
    try{
        const response = yield call(deleteFuture,futureinfo)
        yield put(deleteFutureSuccess(response))
    }catch(error){
        yield put(deleteFutureFail(error))
    }
}

function* futuresaga(){
    yield takeEvery(GET_FUTURE,fetchFuture)
    yield takeEvery(ADD_FUTURE,onaddFuture)
    yield takeEvery(UPDATE_FUTURE,onupdateFuture)
    yield takeEvery(GET_FUTURE_INFO,ongetFutureInfo)
    yield takeEvery(DELETE_FUTURE,ondeleteFuture)

}

export default futuresaga