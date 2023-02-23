import { ADD_CAREERFORM_FAIL, ADD_CAREERFORM_SUCCESS, DELETE_CAREERFORM_FAIL, DELETE_CAREERFORM_SUCCESS, GET_CAREERFORM, GET_CAREERFORM_FAIL, GET_CAREERFORM_INFO_FAIL, GET_CAREERFORM_INFO_SUCCESS, GET_CAREERFORM_SUCCESS, UPDATE_CAREERFORM_FAIL, UPDATE_CAREERFORM_SUCCESS } from "./actionTypes";

const INIT_STATE = {
    careerform : [],
    careerforminfo : {},
    error : []  
}

const careerforms = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_CAREERFORM_SUCCESS:
            return{
                ...state,
                careerform: action.payload
            }

        case GET_CAREERFORM_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case ADD_CAREERFORM_SUCCESS:
            return{
                ...state,
                careerforminfo: action.payload
            }

        case ADD_CAREERFORM_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case UPDATE_CAREERFORM_SUCCESS:
            return{
                ...state,
                careerforminfo: action.payload
            }

        case UPDATE_CAREERFORM_FAIL:
            return{
                ...state,
                error : action.payload
            }

        case GET_CAREERFORM_INFO_SUCCESS:
            return{
                ...state,
                careerforminfo: action.payload
            }
        
        case GET_CAREERFORM_INFO_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case DELETE_CAREERFORM_SUCCESS:
            return{
                ...state,
                careerforminfo: action.payload
            }

        case DELETE_CAREERFORM_FAIL:
            return{
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default careerforms
