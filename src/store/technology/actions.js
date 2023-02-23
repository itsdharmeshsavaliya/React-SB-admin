import { ADD_TECHNOLOGY, ADD_TECHNOLOGY_FAIL, ADD_TECHNOLOGY_SUCCESS, DELETE_TECHNOLOGY, DELETE_TECHNOLOGY_FAIL, DELETE_TECHNOLOGY_SUCCESS, GET_TECHNOLOGY, GET_TECHNOLOGY_FAIL, GET_TECHNOLOGY_INFO, GET_TECHNOLOGY_INFO_FAIL, GET_TECHNOLOGY_INFO_SUCCESS, GET_TECHNOLOGY_SUCCESS, UPDATE_TECHNOLOGY, UPDATE_TECHNOLOGY_FAIL, UPDATE_TECHNOLOGY_SUCCESS } from "./actionTypes";
// import TutorialDataService from "services/tutorial.service";

export const getTechnology = ()=>({
  type:GET_TECHNOLOGY,
})

export const getTechnologySuccess = technology =>({
  type:GET_TECHNOLOGY_SUCCESS,
  payload:technology
})

export const getTechnologyFail = error =>({
  type:GET_TECHNOLOGY_FAIL,
  payload:error
})

export const addTechnology = technologyinfo => ({
  type:ADD_TECHNOLOGY,
  payload:technologyinfo
})

export const addTechnologySuccess = technologyinfo => ({
  type:ADD_TECHNOLOGY_SUCCESS,
  payload:technologyinfo
})

export const addTechnologyFail = error => ({
  type:ADD_TECHNOLOGY_FAIL,
  payload:error
})

export const updateTechnology = technologyinfo => ({
  type:UPDATE_TECHNOLOGY,
  payload:technologyinfo
})

export const updateTechnologySuccess = technologyinfo => ({
  type:UPDATE_TECHNOLOGY_SUCCESS,
  payload:technologyinfo
})

export const updateTechnologyFail = error => ({
  type:UPDATE_TECHNOLOGY_FAIL,
  payload:error
})

export const getTechnologyInfo = id => ({
  type:GET_TECHNOLOGY_INFO,
  payload:id
})

export const getTechnologyInfoSuccess = technologyinfo => ({
  type:GET_TECHNOLOGY_INFO_SUCCESS,
  payload:technologyinfo
})

export const getTechnologyInfoFail = error => ({
  type:GET_TECHNOLOGY_INFO_FAIL,
  payload:error
})

export const deleteTechnology = technologyinfo => ({
  type:DELETE_TECHNOLOGY,
  payload:technologyinfo
})

export const deleteTechnologySuccess = technologyinfo => ({
  type:DELETE_TECHNOLOGY_SUCCESS,
  payload:technologyinfo
})

export const deleteTechnologyFail = error => ({
  type:DELETE_TECHNOLOGY_FAIL,
  payload:error
})

// export const createtutorial  =>{
//     try{
//         const res = await TutorialDataService.create({title,logo});

//         dispatch({
//             type:CREATE_TUTORIAL,
//             payload:res.data,
//         });

//         return Promise.resolve(res.data);
//     }catch(err){
//         Promise.reject(err)
//     }
// };