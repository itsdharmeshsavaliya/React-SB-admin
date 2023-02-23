import { call,put,takeEvery } from "redux-saga/effects";
import { ADD_CAREERFORM, DELETE_CAREERFORM, GET_CAREERFORM, GET_CAREERFORM_INFO, UPDATE_CAREERFORM } from "./actionTypes";

import { addCareerForm, deleteCareerForm, getCareerForm, getCareerFormInfo,updateCareerForm } from "helpers/fakebackend_helper";
import { addCareerFormFail, addCareerFormSuccess, deleteCareerFormFail, deleteCareerFormSuccess, getCareerFormFail, getCareerFormInfoFail, getCareerFormInfoSuccess, getCareerFormSuccess, updateCareerFormFail, updateCareerFormSuccess } from "./actions";

function* fetchCareerForm() {
    try{
        const response = yield call(getCareerForm)
        yield put(getCareerFormSuccess(response))
    }catch(error){
        yield put(getCareerFormFail(error))
    }
    
}

function* onaddCareerForm({ payload: careerforminfo}) {
    try{
        const response = yield call(addCareerForm,careerforminfo)
        yield put(addCareerFormSuccess(response))
    }catch({response}){
        yield put(addCareerFormFail(response))

    }
}

function* onupdateCareerForm({ payload: careerforminfo}) {
    try{
        const response = yield call(updateCareerForm,careerforminfo)
        yield put(updateCareerFormSuccess(response))
    }catch({response}){
        yield put(updateCareerFormFail(response))
    }
}

function* ongetCareerFormInfo({ payload: id}) {
    try{    
        const response = yield call(getCareerFormInfo,id)
        yield put(getCareerFormInfoSuccess(response))
    }catch(error){
        yield put(getCareerFormInfoFail(error))
    }
}

function* ondeleteCareerForm({ payload: careerforminfo}) {
    try{
        const response = yield call(deleteCareerForm,careerforminfo)
        yield put(deleteCareerFormSuccess(response))
    }catch(error){
        yield put(deleteCareerFormFail(error))
    }
}

function* careerformsaga() {
    yield takeEvery(GET_CAREERFORM,fetchCareerForm)
    yield takeEvery(ADD_CAREERFORM,onaddCareerForm)
    yield takeEvery(UPDATE_CAREERFORM,onupdateCareerForm)
    yield takeEvery(GET_CAREERFORM_INFO,ongetCareerFormInfo)
    yield takeEvery(DELETE_CAREERFORM,ondeleteCareerForm)
}

export default careerformsaga