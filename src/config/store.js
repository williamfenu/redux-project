import { createStore } from "redux";
import autorReducer from "../commons/reducers/autorReducer";

let store = createStore(autorReducer);

export default store;
