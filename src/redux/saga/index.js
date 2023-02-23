import { all } from "redux-saga/effects";  
import { watchTechnologyAsync } from "./technology";

export function* rootSaga() {
    yield all([
        watchTechnologyAsync()
    ])
}