import { ADD_FUTURE, ADD_FUTURE_FAIL, ADD_FUTURE_SUCCESS, DELETE_FUTURE, DELETE_FUTURE_FAIL, DELETE_FUTURE_SUCCESS, GET_FUTURE, GET_FUTURE_FAIL, GET_FUTURE_INFO, GET_FUTURE_INFO_FAIL, GET_FUTURE_INFO_SUCCESS, GET_FUTURE_SUCCESS, UPDATE_FUTURE, UPDATE_FUTURE_FAIL, UPDATE_FUTURE_SUCCESS } from "./actionTypes";

export const getFuture = () => ({
    type:GET_FUTURE
})

export const getFutureSuccess = future => ({
    type:GET_FUTURE_SUCCESS,
    payload:future
})

export const getFutureFail = error => ({
    type:GET_FUTURE_FAIL,
    payload:error
})

export const addFuture = futureinfo => ({
    type:ADD_FUTURE,
    payload:futureinfo
})

export const addFutureSuccess = futureinfo => ({
    type:ADD_FUTURE_SUCCESS,
    payload:futureinfo
})

export const addFutureFail = error => ({
    type:ADD_FUTURE_FAIL,
    payload:error
})

export const updateFuture = futureinfo => ({
    type:UPDATE_FUTURE,
    payload:futureinfo
})

export const updateFutureSuccess = futureinfo => ({
    type:UPDATE_FUTURE_SUCCESS,
    payload:futureinfo
})

export const updateFutureFail = error => ({
    type:UPDATE_FUTURE_FAIL,
    payload:error
})

export const getFutureInfo = id => ({
    type:GET_FUTURE_INFO,
    payload:id
})

export const getFutureInfoSuccess = futureinfo => ({
    type:GET_FUTURE_INFO_SUCCESS,
    payload:futureinfo
})

export const getFutureInfoFail = error => ({
    type:GET_FUTURE_INFO_FAIL,
    payload:error
})

export const deleteFuture = futureinfo => ({
    type:DELETE_FUTURE,
    payload:futureinfo
})

export const deleteFutureSuccess = futureinfo => ({
    type:DELETE_FUTURE_SUCCESS,
    payload:futureinfo
})

export const deleteFutureFail = error => ({
    type:DELETE_FUTURE_FAIL,
    payload:error
})