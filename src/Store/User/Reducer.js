const initialState = {
    users: [],
    user: {},
    success: false,
    error: null,
    isLoading: false,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_USER_SUCCESS":
        return {
          ...state,
          isLoading: false,
          users: action.payload,
        };
      case "GET_USER_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
  
      // Add user
      case "ADD_USER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "ADD_USER_SUCCESS":
        return {
          ...state,
          isLoading: false,
          success: true,
        };
      case "ADD_USER_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
  
      // single User
      case "GET_SINGLEUSER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_SINGLEUSER_SUCCESS":
        return {
          ...state,
          isLoading: false,
          success: true,
          user: action.payload
        };
      case "GET_SINGLEUSER_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
  
      // Edit user
      case "EDIT_USER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "EDIT_USER_SUCCESS":
        return {
          ...state,
          isLoading: false,
          success: true,
        };
      case "EDIT_USER_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
  
  
  
      //Delete user
      case "DELETE_USER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "DELETE_USER_SUCCESS":
        return {
          ...state,
          isLoading: false,
          success: true,
        };
      case "DELETE_USER_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    };
  
  };
  
  export default userReducer;