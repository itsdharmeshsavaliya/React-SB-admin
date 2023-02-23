import {call,put,takeEvery} from "redux-saga/effects"

import { ADD_CAREER, DELETE_CAREER, GET_CAREER, GET_CAREER_INFO, UPDATE_CAREER } from "./actionTypes"
import { getCareerSuccess,getCareerFail, addCareerSuccess, addCareerFail, updateCareerSuccess, updateCareerFail, getCareerInfoSuccess, getCareerInfoFail, deleteCareerSuccess, deleteCareerFail } from "./actions"

import { addCareer, deleteCareer, getCareer, getCareerInfo, updateCareer } from "helpers/fakebackend_helper"
// import history from "../../history"



function* fetchCareer() {
    try{
        const response = yield call(getCareer)
        yield put(getCareerSuccess(response))
    }catch(error){
        yield put(getCareerFail(error))
    }
}

function* onaddCareer({ payload: careerinfo }) {

        // const response = yield call(addCareer,careerinfo);
        // if(statusCode === 200){
        //     yield put(addCareerSuccess(response))
        // }else{
        //     yield put(addCareerSuccess(response.error));
        // }
    try{
        const response = yield call(addCareer,careerinfo)
        console.log(response)
        yield put(addCareerSuccess(response))
        //  history.push("/career")
        // window.location = "/career"
        
    }catch({response}){
            console.log(response)
         yield put(addCareerFail(response))
        }

    // catch({response}){
    //     console.log(response)
    //     yield put(addCareerFail(response))
    // }
}

function* onupdateCareer({ payload: careerinfo }) {
    try{
        const response = yield call(updateCareer,careerinfo)
        yield put(updateCareerSuccess(response))
        console.log(response)
    }catch({response}){
        yield put(updateCareerFail(response))
    }
}

function* ongetCareerInfo({ payload: id }) {
    try{
        const response = yield call(getCareerInfo,id)
        yield put(getCareerInfoSuccess(response))
    }catch(error){
        yield put(getCareerInfoFail(error))
    }
}

function* ondeleteCareer({ payload: careerinfo }) {
    try{
        const response = yield call(deleteCareer,careerinfo)
        yield put(deleteCareerSuccess(response))
    }catch(error){
        console.log(error)
        yield put(deleteCareerFail(error))
    }
}

function* careerSaga() {
    yield takeEvery(GET_CAREER,fetchCareer)
    yield takeEvery(ADD_CAREER,onaddCareer)
    yield takeEvery(UPDATE_CAREER,onupdateCareer)
    yield takeEvery(GET_CAREER_INFO,ongetCareerInfo)
    yield takeEvery(DELETE_CAREER,ondeleteCareer)
}
export default careerSaga