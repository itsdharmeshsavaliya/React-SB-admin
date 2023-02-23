import {ADD_CAREER, ADD_CAREER_FAIL, ADD_CAREER_SUCCESS, DELETE_CAREER, DELETE_CAREER_FAIL, DELETE_CAREER_SUCCESS, GET_CAREER,GET_CAREER_FAIL,GET_CAREER_INFO,GET_CAREER_INFO_FAIL,GET_CAREER_INFO_SUCCESS,GET_CAREER_SUCCESS, UPDATE_CAREER, UPDATE_CAREER_FAIL, UPDATE_CAREER_SUCCESS} from './actionTypes'

export const getCareer = () => ({
    type:GET_CAREER,
})

export const getCareerSuccess = career => ({
    type:GET_CAREER_SUCCESS,
    payload:career,
})

export const getCareerFail = error => ({
    type:GET_CAREER_FAIL,
    payload:error,
})

export const addCareer = careerinfo => ({
    type:ADD_CAREER,
    payload:careerinfo
})

export const addCareerSuccess = careerinfo => ({
    type:ADD_CAREER_SUCCESS,
    payload:careerinfo
})

export const addCareerFail = error => ({
    type:ADD_CAREER_FAIL,
    payload:error
})

export const updateCareer = careerinfo => ({
    type:UPDATE_CAREER,
    payload:careerinfo
})

export const updateCareerSuccess = careerinfo => ({
    type:UPDATE_CAREER_SUCCESS,
    payload:careerinfo
})

export const updateCareerFail = error => ({
    type:UPDATE_CAREER_FAIL,
    payload:error
})

export const getCareerInfo = id => ({
    type:GET_CAREER_INFO,
    payload:id,
})

export const getCareerInfoSuccess = (careerinfo) => ({
    type:GET_CAREER_INFO_SUCCESS,
    payload:careerinfo
})

export const getCareerInfoFail = error => ({
    type:GET_CAREER_INFO_FAIL,
    payload:error
})

export const deleteCareer = careerinfo => ({
    type:DELETE_CAREER,
    payload:careerinfo
})

export const deleteCareerSuccess = careerinfo => ({
    type:DELETE_CAREER_SUCCESS,
    payload:careerinfo
})

export const deleteCareerFail = error => ({
    type:DELETE_CAREER_FAIL,
    payload:error
})