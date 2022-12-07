import { combineReducers } from "redux";
import moviesState from "./movies";
import userState from "./user";

export default combineReducers({ moviesState, userState })