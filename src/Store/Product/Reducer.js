const initialState = {
  products: [],
  product: {},
  success: false,
  error: null,
  isLoading: false,
};


const productsReducer = ( state = initialState, action) =>{
  switch ( action.type){
      case "GET_PRODUCT_PENDING":
          return{
              ...state,
              isLoading: true,
          };
      case "GET_PRODUCT_SUCCESS":
          return {
              ...state,
              isLoading: false,
              products: action.payload,
          };
      case "GET_PRODUCT_FAILED":
          return{
              ...state,
              isLoading: false,
              error: action.payload,
          };

      // Add Subcategory
      case "ADD_PRODUCT_PENDING":
          return {
            ...state,
            isLoading: true,
          };
        case "ADD_PRODUCT_SUCCESS":
          return {
            ...state,
            isLoading: false,
            success: true,
          };
        case "ADD_PRODUCT_FAILED":
          return {
            ...state,
            isLoading: false,
            error: action.payload,
          };

      // single product

      case "GET_SINGLE_PROUDUCT_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_SINGLEPROUDUCT_SUCCESS":
        return {
          ...state,
          isLoading: false,
          success: true,
          product: action.payload,
        };
      case "GET_SINGLE_PROUDUCT_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default: 
          return state;
  };

};

export default productsReducer;