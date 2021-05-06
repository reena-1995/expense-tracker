// import { searchResult } from "../../../@fake-db/navbar/navbarBookmarkSearch"

// const defaultStarred = searchResult.filter(item => {
//   return item.starred === true
// })

const initialState = {
    transactions:{data:[]},
    userInfo:""
  };
  
  const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_TRANSACTION':
        return {
          ...state,
          transactions:{ data:action.payload.result},
        };
        case 'GET_USER_INFO':
        return {
          ...state,
          userInfo:action.payload[0].sum,
        };
        
     
      default:
        return state;
    }
  };
  
  export default transactionsReducer;
  