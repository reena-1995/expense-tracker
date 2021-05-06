import axios from "axios";

import { history } from "../../../history"
import setHeader from "../../../utility/context/SetHeaders"

//Login
export const login = obj => {
  return ( dispatch, getState)=>{
    const loginObj = {"email":obj.email, "password": obj.password}
    axios.post("auth/login",loginObj).then(response=>{
        dispatch({"type":"LOGIN_WITH_EMAIL", "payload":response.data})
        localStorage.setItem("refresh-token",response.data.tokens.refresh.token)
        setHeader(response.data.tokens.access.token);
        history.push("/");
    }).catch(error=>{
      dispatch({"type":"LOGIN_WITH_ERROR", "payload":error})
    })
    
  }

}
//Login
export const register = obj => {
  return ( dispatch, getState)=>{
    const registerObj = {"name":obj.name,"email":obj.email, "password": obj.password}
    axios.post("auth/register",registerObj).then(response=>{
        dispatch({"type":"LOGIN_WITH_EMAIL", "payload":response.data})
        localStorage.setItem("refresh-token",response.data.tokens.refresh.token)
        setHeader(response.data.tokens.access.token);
        history.push("/");
    }).catch(error=>{
      dispatch({"type":"LOGIN_WITH_ERROR", "payload":error})
    })
    
  }

}
//Refresh-token
export const  refreshToken= oauth_token => {
  const refreshToken=localStorage.getItem('refresh-token');
  return ( dispatch, getState)=>{
    axios.post("/auth/refresh-tokens",{refreshToken}).then(response=>{
        dispatch({"type":"LOGIN_WITH_EMAIL", "payload":response.data})
        setHeader(response.data.tokens.access.token);
        localStorage.setItem("refresh-token",response.data.tokens.refresh.token)
    }).catch(error=>{
      localStorage.removeItem("refresh-token");
      dispatch({"type":"LOGIN_WITH_ERROR", "payload":error})
    })
    
  }

}


//Logout
export const logout = _ => {
  return ( dispatch, getState)=>{
    localStorage.removeItem("refresh-token");
    dispatch({"type":"LOGOUT_SUCCESS"})
    history.push("/login");
  }

}

//Hide Loader
export const hideLoader = _ => {
  return dispatch =>{
    dispatch({"type":"HIDE_LOADER"})
  };
}
