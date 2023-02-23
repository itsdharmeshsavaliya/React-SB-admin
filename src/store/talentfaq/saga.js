import { call,put,takeEvery } from "redux-saga/effects";
import { ADD_TALENTFAQ, DELETE_TALENTFAQ, GET_TALENTFAQ_INFO, GET_TALENT_FAQ, UPDATE_TALENTFAQ } from "./actionTypes";

import { addTalentFaq, deleteTalentFaq, getTalentFaq, getTalentFaqInfo, updateTalentFaq } from "helpers/fakebackend_helper";
import { addTalentFaqFail, addTalentFaqSuccess, deleteTalentFaqFail, deleteTalentFaqSuccess, getTalentFaqFail, getTalentFaqInfoFail, getTalentFaqInfoSuccess, getTalentFaqSuccess, updateTalentFaqFail, updateTalentFaqSuccess } from "./actions";

function* fetchTalentFaq() {
    try{
        const response = yield call(getTalentFaq)
        yield put(getTalentFaqSuccess(response))
    }catch(error){
        yield put(getTalentFaqFail(error))
    }
    
}

function* onaddTalentFaq({ payload: talentfaqinfo }) {
    try{
        const response = yield call(addTalentFaq,talentfaqinfo)
        yield put(addTalentFaqSuccess(response))
    }catch({response}){
        yield put(addTalentFaqFail(response))

    }
}

function* onupdateTalentFaq({ payload: talentfaqinfo }) {
    try{
        const response = yield call(updateTalentFaq,talentfaqinfo)
        yield put(updateTalentFaqSuccess(response))
    }catch({response}){
        yield put(updateTalentFaqFail(response))
    }
}

function* ongetTalentFaqInfo({ payload: id }) {
    try{    
        const response = yield call(getTalentFaqInfo,id)
        yield put(getTalentFaqInfoSuccess(response))
    }catch(error){
        yield put(getTalentFaqInfoFail(error))
    }
}

function* ondeleteTalentFaq({ payload: talentfaqinfo }) {
    try{
        const response = yield call(deleteTalentFaq,talentfaqinfo)
        yield put(deleteTalentFaqSuccess(response))
    }catch(error){
        yield put(deleteTalentFaqFail(error))
    }
}

function* talentfaqsaga() {
    yield takeEvery(GET_TALENT_FAQ,fetchTalentFaq)
    yield takeEvery(ADD_TALENTFAQ,onaddTalentFaq)
    yield takeEvery(UPDATE_TALENTFAQ,onupdateTalentFaq)
    yield takeEvery(GET_TALENTFAQ_INFO,ongetTalentFaqInfo)
    yield takeEvery(DELETE_TALENTFAQ,ondeleteTalentFaq)
}

export default talentfaqsaga