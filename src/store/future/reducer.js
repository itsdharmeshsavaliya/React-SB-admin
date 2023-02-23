import { ADD_FUTURE_FAIL, ADD_FUTURE_SUCCESS, DELETE_FUTURE_FAIL, DELETE_FUTURE_SUCCESS, GET_FUTURE_FAIL, GET_FUTURE_INFO_FAIL, GET_FUTURE_INFO_SUCCESS, GET_FUTURE_SUCCESS, UPDATE_FUTURE_FAIL, UPDATE_FUTURE_SUCCESS } from "./actionTypes";

const INIT_STATE = {
    future: [],
    futureinfo: {},
    error: []
}

const futures = (state = INIT_STATE, action) => {
    switch(action.type){
        case GET_FUTURE_SUCCESS:
            return{
                ...state,
                future: action.payload,
            }

        case GET_FUTURE_FAIL:
            return{
                ...state,
                error:action.payload
            }
            
        case ADD_FUTURE_SUCCESS:
            return{
                ...state,
                futureinfo:action.payload
            }

        case ADD_FUTURE_FAIL:
            return{
                ...state,
                error:action.payload.data.error
            }

        case UPDATE_FUTURE_SUCCESS:
            return{
                ...state,
                futureinfo:action.payload
            }

        case UPDATE_FUTURE_FAIL:
            return{
                ...state,
                error:action.payload.data.error
            }

        case GET_FUTURE_INFO_SUCCESS:
            return{
                ...state,
                futureinfo:action.payload
            }
        
        case GET_FUTURE_INFO_FAIL:
            return{
                ...state,
                error:action.payload
            }

        case DELETE_FUTURE_SUCCESS:
            return{
                ...state,
                futureinfo:action.payload
            }
            
        case DELETE_FUTURE_FAIL:
            return{
                ...state,
                error:action.payload
            }
        
        default:
            return state
    }
}

export default futures