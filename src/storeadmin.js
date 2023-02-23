import { configureStore } from "@reduxjs/toolkit";
import technology from "redux/slice/technology";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "redux/saga";
const sagaMiddleware = createSagaMiddleware()
const storeadmin = configureStore({
    reducer: {
        technology
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk:false}).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default storeadmin