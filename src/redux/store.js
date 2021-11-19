// import { createStore } from "redux";
import rootReducer from "./rootReduser";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({reducer: rootReducer})

// const store = createStore(rootReduser, composeWithDevTools())

export default store;