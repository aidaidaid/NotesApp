import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import { rootSaga } from "../saga";
import noteReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(noteReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);