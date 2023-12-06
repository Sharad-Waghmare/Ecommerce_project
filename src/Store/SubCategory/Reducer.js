const initialState = {
    subcategories: [],
    subcategory: {},
    success: false,
    error: null,
    isLoading: false,
};

const subcategoryReducer = ( state = initialState, action) =>{
    switch ( action.type){
        case "GET_SUBCATEGORY_PENDING":
            return{
                ...state,
                isLoading: true,
            };
        case "GET_SUBCATEGORY_SUCCESS":
            return {
                ...state,
                isLoading: false,
                subcategories: action.payload,
            };
        case "GET_SUBCATEGORY_FAILED":
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            };

        // Add Subcategory
        case "ADD_SUBCATEGORY_PENDING":
            return {
              ...state,
              isLoading: true,
            };
          case "ADD_SUBCATEGORY_SUCCESS":
            return {
              ...state,
              isLoading: false,
              success: true,
            };
          case "ADD_SUBCATEGORY_FAILED":
            return {
              ...state,
              isLoading: false,
              error: action.payload,
            };
        default: 
            return state;
    };

};

export default subcategoryReducer;