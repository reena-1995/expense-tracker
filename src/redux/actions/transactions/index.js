import axios from "axios";
//Create transaction
export const createTransactions = body => {
  return ( dispatch, getState)=>{
    axios.post("/transaction",body).then(response=>{
        dispatch({"type":"CREATE_TRANSACTION", "payload":response.data})
        dispatch(getTransactions())
        dispatch(getUserInfo())
   
    }).catch(error=>{
    
      dispatch({"type":"CREATE_TRANSACTION_ERROR", "payload":error})

    })
    
  }

}
//Get transactions
export const getTransactions = _ => {
  return ( dispatch, getState)=>{
    axios.get("/transaction").then(response=>{
        dispatch({"type":"GET_TRANSACTION", "payload":response.data})
   
    }).catch(error=>{
    
      dispatch({"type":"GET_TRANSACTION_ERROR", "payload":error})

    })
    
  }

}
//Get transactions
export const getUserInfo = _ => {
  return ( dispatch, getState)=>{
    axios.get("/user").then(response=>{
        dispatch({"type":"GET_USER_INFO", "payload":response.data})
   
    }).catch(error=>{
    
      dispatch({"type":"GET_USER_INFO_ERROR", "payload":error})

    })
    
  }

}
//Get transactions
export const deleteTransaction = id => {
  return ( dispatch, getState)=>{
    axios.delete(`/transaction/${id}`).then(response=>{
        dispatch({"type":"DELETE_TRANSACTION", "payload":response.data})
        dispatch(getTransactions())
        dispatch(getUserInfo())
   
    }).catch(error=>{
    
      dispatch({"type":"DELETE_TRANSACTION_ERROR", "payload":error})

    })
    
  }

}