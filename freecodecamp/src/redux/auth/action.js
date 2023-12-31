import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS } from "./type";
import axios from 'axios'

export const registerUser = (creds) => async (dispatch) => {
    dispatch({type:REGISTER_REQUEST})
  try {
    let res = await axios.post(
      "http://localhost:8080/signup",
      creds
    );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data.user });
    console.log(res.data , "__inside action-------");
    return res.data;
  }catch (err) {
    dispatch({type:REGISTER_ERROR})
    console.log(err);
  }
}

export const loginUser = (creds) => async (dispatch) => {
    dispatch({type:LOGIN_REQUEST})
  try {
    let res = await axios.post("http://localhost:8080/login",creds);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    console.log(res.data.token , "*****login data action.js******")
    return res.data;
  } catch (err) {
    dispatch({type:LOGIN_ERROR})
    console.log(err , "eror logging");
  }
};