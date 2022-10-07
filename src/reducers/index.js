import { combineReducers } from "redux";
import alert from './alert'
import auth from './auth'
import AddFav from "./addFav";

const rootReducer = combineReducers({
    auth,
    alert,
    AddFav,

})
export default rootReducer
