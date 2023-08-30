import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./reducer"; 


const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;