import {call,put,takeEvery} from "redux-saga/effects"

import { ADD_TECHNOLOGY, DELETE_TECHNOLOGY, GET_TECHNOLOGY, GET_TECHNOLOGY_INFO, UPDATE_TECHNOLOGY } from "./actionTypes"

import { addTechnologyFail, addTechnologySuccess, deleteTechnologyFail, deleteTechnologySuccess, getTechnologyFail, getTechnologyInfoFail, getTechnologyInfoSuccess, getTechnologySuccess, updateTechnologyFail, updateTechnologySuccess } from "./actions"

import { addTechnology, deleteTechnology, getTechnology, getTechnologyInfo, updateTechnology } from "../../helpers/fakebackend_helper"

import FormData from "form-data"

function* fetchTechnology() {
    try {
      const response = yield call(getTechnology)
      yield put(getTechnologySuccess(response))
    } catch (error) {
      yield put(getTechnologyFail(error))
    }
  }

function* onAddTechnology({payload:technologyinfo}){
    try{
        const response = yield call(addTechnology,technologyinfo)
        yield put(addTechnologySuccess(response))
        console.log(response)
    }catch({response}){
        yield put(addTechnologyFail(response))
    }
}

function* onupdateTechnology({payload:technologyinfo}){
  try{
    const response = yield call(updateTechnology,technologyinfo)
    yield put(updateTechnologySuccess(response))
  }catch({response}){
    yield put(updateTechnologyFail(response))
  }
}

function* ongetTechnologyInfo({ payload: id}){
  try{
    const response = yield call(getTechnologyInfo,id)
    yield put(getTechnologyInfoSuccess(response))
  }catch(error){
    yield put(getTechnologyInfoFail(error))
  }
}

function* ondeleteTechnology({payload: technologyinfo}){
  try{
    const response = yield call(deleteTechnology,technologyinfo)
    yield put(deleteTechnologySuccess(response))
  }catch(error){  
    yield put(deleteTechnologyFail(error))
  }
}
function* technologySaga(){
    yield takeEvery(GET_TECHNOLOGY,fetchTechnology)  
    yield takeEvery(ADD_TECHNOLOGY,onAddTechnology)
    yield takeEvery(UPDATE_TECHNOLOGY,onupdateTechnology)
    yield takeEvery(GET_TECHNOLOGY_INFO,ongetTechnologyInfo)
    yield takeEvery(DELETE_TECHNOLOGY,ondeleteTechnology)
}
export default technologySaga;