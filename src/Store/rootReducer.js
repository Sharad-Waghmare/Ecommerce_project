import { combineReducers } from "redux";
import categoryReducer from "./Category/Reducer";
import subcategoryReducer from "./SubCategory/Reducer";
import productsReducer from "./Product/Reducer";
import cartsReducer from "./Cart/Reducer";
import userReducer from "./User/Reducer";
// import categoryReducer from "./category/Reducer";
// import subcategoryReducer from "./subcategory/Reducer";


const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    subcategory: subcategoryReducer,
    product: productsReducer,
    cart: cartsReducer
});

export default rootReducer;