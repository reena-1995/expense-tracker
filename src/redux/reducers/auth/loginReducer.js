const initialState = {
  isAuthenticated: false,
  loading: false,
  value:0
};





export const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_WITH_EMAIL': {
      return {
        ...state,
        values: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    }
    case 'HIDE_LOADER': {
      return { ...state, loading: false };
    }
    case 'LOGOUT_SUCCESS': {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    case 'LOGIN_WITH_ERROR': {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
