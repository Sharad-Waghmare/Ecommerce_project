const initialState = {
    categories: [],
    category: {},
    success: false,
    error: null,
    isLoading: false,
};

const categoryReducer = ( state = initialState, action) =>{
    switch (action.type){
        case "GET_CATEGORY_PENDING":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_CATEGORY_SUCCESS":
            return{
                ...state,
                isLoading: false,
                categories: action.payload,
            };
        case "GET_CATEGORY_FAILED":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        
        // Add Category
    case "ADD_CATEGORY_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "ADD_CATEGORY_SUCCESS":
        return {
          ...state,
          isLoading: false,
          success: true,
        };
      case "ADD_CATEGORY_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
    
        // single
        case "GET_SINGLECATEGORY_PENDING":
            return {
              ...state,
              isLoading: true,
            };
          case "GET_SINGLECATEGORY_SUCCESS":
            return {
              ...state,
              isLoading: false,
              success: true,
              category: action.payload
            };
          case "GET_SINGLECATEGORY_FAILED":
            return {
              ...state,
              isLoading: false,
              error: action.payload,
            };

            // Edit Category
            case "EDIT_CATEGORY_PENDING":
                return {
                  ...state,
                  isLoading: true,
                };
              case "EDIT_CATEGORY_SUCCESS":
                return {
                  ...state,
                  isLoading: false,
                  success: true,
                };
              case "EDIT_CATEGORY_FAILED":
                return {
                  ...state,
                  isLoading: false,
                  error: action.payload,
                };

            // Delete Category
            case "DELETE_CATEGORY_PENDING":
                return {
                  ...state,
                  isLoading: true,
                };
              case "DELETE_CATEGORY_SUCCESS":
                return {
                  ...state,
                  isLoading: false,
                  success: true,
                };
              case "DELETE_CATEGORY_FAILED":
                return {
                  ...state,
                  isLoading: false,
                  error: action.payload,
                };
        
        default: 
            return state;
    };

};

export default categoryReducer;