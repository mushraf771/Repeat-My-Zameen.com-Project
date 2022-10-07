import axios from "axios";
import { setAlert } from "./alert";
// import { Navigate } from "react-router";
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT,
} from "./types";

export const login = (email, password) => async dispatch => {
    const config = ({
        headers: { 'Content-Type':'application/json' }
    })
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post(`/token/`, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload:res.data
        })
        dispatch(setAlert('User Authenticated Successfully', 'success'));
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });
        dispatch(setAlert(" User Authentication Failed",'danger'))
    }
}
export const signup = ({ name, email, password, password2, }) => async dispatch => {
    const config = ({
        headers: { 'Content-Type': 'application/json' }
    })
    const body = JSON.stringify({ name, email, password, password2, });
    // console.log(body,'body auth.js line 16');
    try {
        const res = await axios.post(`/accounts/signup/`, body, config);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data,
        })
        // console.log(res.data);
        dispatch(login(email, password));
        // dispatch(signup(name, email, password, password2));
        // dispatch(setAlert('Account Created Successfully'));
        // <Navigate to='/login'/>
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL,
            payload: err.data
        })
        console.log(err, 'line 32 error');
        dispatch(setAlert("Account Creation Failed", 'danger'))
    }
    // if (login)
    // return dispatch(setAlert('Account Created Successfully'));
};
export const logout = () => dispatch => { 
    dispatch(setAlert('logout successfully', 'success'));
    dispatch({ type: LOGOUT })
}