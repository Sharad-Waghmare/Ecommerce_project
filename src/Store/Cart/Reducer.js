const initialState = {
  carts: [],
  cart: {},
  success: false,
  error: null,
  isLoading: false,
};


const cartsReducer = ( state = initialState, action) =>{
  switch ( action.type){
      case "GET_CART_PENDING":
          return{
              ...state,
              isLoading: true,
          };
      case "GET_CART_SUCCESS":
          return {
              ...state,
              isLoading: false,
              carts: action.payload,
          };
      case "GET_CART_FAILED":
          return{
              ...state,
              isLoading: false,
              error: action.payload,
          };

      // Add Subcategory
      case "ADD_CART_PENDING":
          return {
            ...state,
            isLoading: true,
          };
        case "ADD_CART_SUCCESS":
          return {
            ...state,
            isLoading: false,
            success: true,
          };
        case "ADD_CART_FAILED":
          return {
            ...state,
            isLoading: false,
            error: action.payload,
          };

      // Update 
      case "update_quantity_pending":
        return {
          ...state,
          isLoading: true,
        };
      case "update_quantity_success":
        return {
          ...state,
          isLoading: false,
          success: true,
        };
      case "update_quantity_failed":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
  
        // Remove
        case "remove_cart_pending":
          return {
            ...state,
            isLoading: true,
          };
        case "remove_cart_success":
          return {
            ...state,
            isLoading: false,
            success: true,
          };
        case "remove_cart_failed":
          return {
            ...state,
            isLoading: false,
            error: action.payload,
          };
      default: 
          return state;
  };

};

export default cartsReducer;