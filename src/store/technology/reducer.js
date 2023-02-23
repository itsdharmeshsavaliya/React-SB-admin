import { ADD_TECHNOLOGY_FAIL, ADD_TECHNOLOGY_SUCCESS, DELETE_TECHNOLOGY_FAIL, DELETE_TECHNOLOGY_SUCCESS, GET_TECHNOLOGY_FAIL, GET_TECHNOLOGY_INFO_FAIL, GET_TECHNOLOGY_INFO_SUCCESS, GET_TECHNOLOGY_SUCCESS, UPDATE_TECHNOLOGY_FAIL, UPDATE_TECHNOLOGY_SUCCESS } from "./actionTypes";

const INIT_STATE = {
    technology : [],
    technologyinfo : {},
    error : []
}

const technologydata = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_TECHNOLOGY_SUCCESS:
            return{
                ...state,
                technology: action.payload
            }

        case GET_TECHNOLOGY_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case ADD_TECHNOLOGY_SUCCESS:
            return{
                ...state,
                technologyinfo: action.payload
            }

        case ADD_TECHNOLOGY_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case UPDATE_TECHNOLOGY_SUCCESS:
            return{
                ...state,
                technologyinfo: action.payload
            }

        case UPDATE_TECHNOLOGY_FAIL:
            return{
                ...state,
                error : action.payload
            }

        case GET_TECHNOLOGY_INFO_SUCCESS:
            return{
                ...state,
                technologyinfo: action.payload
            }
        
        case GET_TECHNOLOGY_INFO_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case DELETE_TECHNOLOGY_SUCCESS:
            return{
                ...state,
                technologyinfo: action.payload
            }

        case DELETE_TECHNOLOGY_FAIL:
            return{
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
export default technologydata