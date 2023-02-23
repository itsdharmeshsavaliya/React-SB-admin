import { ADD_TALENTFAQ, ADD_TALENTFAQ_FAIL, ADD_TALENTFAQ_SUCCESS, DELETE_TALENTFAQ, DELETE_TALENTFAQ_FAIL, DELETE_TALENTFAQ_SUCCESS, GET_TALENTFAQ_FAIL, GET_TALENTFAQ_INFO, GET_TALENTFAQ_INFO_FAIL, GET_TALENTFAQ_INFO_SUCCESS, GET_TALENTFAQ_SUCCESS, GET_TALENT_FAQ, UPDATE_TALENTFAQ, UPDATE_TALENTFAQ_FAIL, UPDATE_TALENTFAQ_SUCCESS } from "./actionTypes";

export const getTalentFaq = () =>({
    type:GET_TALENT_FAQ
})

export const getTalentFaqSuccess = talentfaq =>({
    type:GET_TALENTFAQ_SUCCESS,
    payload:talentfaq
})

export const getTalentFaqFail = error =>({
    type:GET_TALENTFAQ_FAIL,
    payload:error
})

export const addTalentFaq = talentfaqinfo => ({
    type:ADD_TALENTFAQ,
    payload:talentfaqinfo
})

export const addTalentFaqSuccess = talentfaqinfo => ({
    type:ADD_TALENTFAQ_SUCCESS,
    payload:talentfaqinfo
})

export const addTalentFaqFail = error => ({
    type:ADD_TALENTFAQ_FAIL,
    payload:error
})

export const updateTalentFaq = talentfaqinfo => ({
    type:UPDATE_TALENTFAQ,
    payload:talentfaqinfo
})

export const updateTalentFaqSuccess = talentfaqinfo => ({
    type:UPDATE_TALENTFAQ_SUCCESS,
    payload:talentfaqinfo
})

export const updateTalentFaqFail = error => ({
    type:UPDATE_TALENTFAQ_FAIL,
    payload:error
})

export const getTalentFaqInfo = id => ({
    type:GET_TALENTFAQ_INFO,
    payload:id
})

export const getTalentFaqInfoSuccess = talentfaqinfo => ({
    type:GET_TALENTFAQ_INFO_SUCCESS,
    payload:talentfaqinfo
})

export const getTalentFaqInfoFail = error => ({
    type:GET_TALENTFAQ_INFO_FAIL,
    payload:error
})

export const deleteTalentFaq = talentfaqinfo => ({
    type:DELETE_TALENTFAQ,
    payload:talentfaqinfo
})

export const deleteTalentFaqSuccess = talentfaqinfo => ({
    type:DELETE_TALENTFAQ_SUCCESS,
    payload:talentfaqinfo
})

export const deleteTalentFaqFail = error => ({
    type:DELETE_TALENTFAQ_FAIL,
    payload:error
})