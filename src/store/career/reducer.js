import {
  GET_CAREER_SUCCESS,
  GET_CAREER_FAIL,
  ADD_CAREER_SUCCESS,
  ADD_CAREER_FAIL,
  UPDATE_CAREER_SUCCESS,
  UPDATE_CAREER_FAIL,
  GET_CAREER_INFO_SUCCESS,
  GET_CAREER_INFO_FAIL,
  DELETE_CAREER_SUCCESS,
  DELETE_CAREER_FAIL,
} from "./actionTypes"

let INIT_STATE = {
  career: [],
  careerinfo: {},
  error: [],
}

const careers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CAREER_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        career: action.payload,
      }

    case GET_CAREER_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ADD_CAREER_SUCCESS:
      return {
        ...state,
        careerinfo: action.payload,
        error:[]
      }

    case ADD_CAREER_FAIL:
      // console.log(action.payload.data.error)
      return {
        ...state,
        error: action.payload.data.error,
      }

    case UPDATE_CAREER_SUCCESS:
      return {
        ...state,
        careerinfo: action.payload,
      }

    case UPDATE_CAREER_FAIL:
      return {
        ...state,
        error: action.payload.data.error,
      }

    case GET_CAREER_INFO_SUCCESS:
      return {
        ...state,
        careerinfo: action.payload,
      }

    case GET_CAREER_INFO_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case DELETE_CAREER_SUCCESS:
      return {
        ...state,
        careerinfo: action.payload,
      }

    case DELETE_CAREER_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default careers
