import axios from "axios";


export const  getProductsAll = () =>{
    return (dispatch) => {
        dispatch({ type: "GET_PRODUCT_PENDING" });
        axios
            .get(`http://localhost:8001/products/get-all-products`)
            // .get(`https://dummyjson.com/products/1`)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "GET_PRODUCT_SUCCESS", payload: res.data })

            })
            .catch((err) => {
                dispatch({ type: "GET_PRODUCT_FAILED", payload: err.message })
            })
    };
};



export const getSingleProduct = (id) => {
    console.log(id)
    return (dispatch) => {
        dispatch({ type: "GET_SINGLE_PROUDUCT_PENDING" });
      return axios
            .get(`http://localhost:8001/products/get-single-products/${id}`)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "GET_SINGLEPROUDUCT_SUCCESS", payload: res.data })
                return Promise.resolve()

            })
            .catch((err) => {
                dispatch({ type: "GET_SINGLE_PROUDUCT_FAILED", payload: err.message })
                return Promise.reject()
            })
    };
}