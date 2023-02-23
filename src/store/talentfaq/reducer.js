import { ADD_TALENTFAQ_FAIL, ADD_TALENTFAQ_SUCCESS, DELETE_TALENTFAQ_FAIL, DELETE_TALENTFAQ_SUCCESS, GET_TALENTFAQ_FAIL, GET_TALENTFAQ_INFO_FAIL, GET_TALENTFAQ_INFO_SUCCESS, GET_TALENTFAQ_SUCCESS, UPDATE_TALENTFAQ_FAIL, UPDATE_TALENTFAQ_SUCCESS } from "./actionTypes";

const INIT_STATE = {
    talentfaq : [],
    talentfaqinfo : {},
    error : []  
}

const talentfaqs = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_TALENTFAQ_SUCCESS:
            return{
                ...state,
                talentfaq: action.payload
            }

        case GET_TALENTFAQ_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case ADD_TALENTFAQ_SUCCESS:
            return{
                ...state,
                talentfaqinfo: action.payload
            }

        case ADD_TALENTFAQ_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case UPDATE_TALENTFAQ_SUCCESS:
            return{
                ...state,
                talentfaqinfo: action.payload
            }

        case UPDATE_TALENTFAQ_FAIL:
            return{
                ...state,
                error : action.payload
            }

        case GET_TALENTFAQ_INFO_SUCCESS:
            return{
                ...state,
                talentfaqinfo: action.payload
            }
        
        case GET_TALENTFAQ_INFO_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case DELETE_TALENTFAQ_SUCCESS:
            return{
                ...state,
                talentfaqinfo: action.payload
            }

        case DELETE_TALENTFAQ_FAIL:
            return{
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default talentfaqs
