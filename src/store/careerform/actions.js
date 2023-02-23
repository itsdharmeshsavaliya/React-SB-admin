import { ADD_CAREERFORM, ADD_CAREERFORM_FAIL, ADD_CAREERFORM_SUCCESS, DELETE_CAREERFORM, DELETE_CAREERFORM_FAIL, DELETE_CAREERFORM_SUCCESS, GET_CAREERFORM, GET_CAREERFORM_FAIL, GET_CAREERFORM_INFO, GET_CAREERFORM_INFO_FAIL, GET_CAREERFORM_INFO_SUCCESS, GET_CAREERFORM_SUCCESS, UPDATE_CAREERFORM, UPDATE_CAREERFORM_FAIL, UPDATE_CAREERFORM_SUCCESS } from "./actionTypes";

export const getCareerForm = () =>({
    type:GET_CAREERFORM
})

export const getCareerFormSuccess = careerform =>({
    type:GET_CAREERFORM_SUCCESS,
    payload:careerform
})

export const getCareerFormFail = error =>({
    type:GET_CAREERFORM_FAIL,
    payload:error
})

export const addCareerForm = careerforminfo => ({
    type:ADD_CAREERFORM,
    payload:careerforminfo
})

export const addCareerFormSuccess = careerforminfo => ({
    type:ADD_CAREERFORM_SUCCESS,
    payload:careerforminfo
})

export const addCareerFormFail = error => ({
    type:ADD_CAREERFORM_FAIL,
    payload:error
})

export const updateCareerForm = careerforminfo => ({
    type:UPDATE_CAREERFORM,
    payload:careerforminfo
})

export const updateCareerFormSuccess = careerforminfo => ({
    type:UPDATE_CAREERFORM_SUCCESS,
    payload:careerforminfo
})

export const updateCareerFormFail = error => ({
    type:UPDATE_CAREERFORM_FAIL,
    payload:error
})

export const getCareerFormInfo = id => ({
    type:GET_CAREERFORM_INFO,
    payload:id
})

export const getCareerFormInfoSuccess = careerforminfo => ({
    type:GET_CAREERFORM_INFO_SUCCESS,
    payload:careerforminfo
})

export const getCareerFormInfoFail = error => ({
    type:GET_CAREERFORM_INFO_FAIL,
    payload:error
})

export const deleteCareerForm = careerforminfo => ({
    type:DELETE_CAREERFORM,
    payload:careerforminfo
})

export const deleteCareerFormSuccess = careerforminfo => ({
    type:DELETE_CAREERFORM_SUCCESS,
    payload:careerforminfo
})

export const deleteCareerFormFail = error => ({
    type:DELETE_CAREERFORM_FAIL,
    payload:error
})