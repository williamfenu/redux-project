import { createStore } from "redux";
import authorReducer from "../commons/reducers/authorsReducer";

let store = createStore(authorReducer);

export default store;
