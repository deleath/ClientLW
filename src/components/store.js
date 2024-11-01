// store.js
import { createStore } from "redux";
import { recipesReducer } from "./recipesReducer";

const store = createStore(recipesReducer);

export default store;
