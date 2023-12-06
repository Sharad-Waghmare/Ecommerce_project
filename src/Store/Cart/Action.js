import axios from "axios";


export const  getCartsAll = () =>{
    return (dispatch) => {
        dispatch({ type: "GET_CART_PENDING" });
        axios
            .get(`http://localhost:8001/cart/get-cart`)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "GET_CART_SUCCESS", payload: res.data })

            })
            .catch((err) => {
                dispatch({ type: "GET_CART_FAILED", payload: err.message })
            })
    };
};


export const addtoCart = (id) =>{
    return (dispatch) => {
        dispatch({ type: "ADD_CART_PENDING" })
       return axios
            .get("http://localhost:8001/cart/get-add-cart/" +id)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "ADD_CART_SUCCESS", payload: res.data })

            })
            .catch((err) => {
                dispatch({ type: "ADD_CART_FAILED", payload: err.message })
            })
    };
};


export const updateQuantity = (id, type) => {
    console.log(type);
    console.log(id)
    return (dispatch) => {
      dispatch({ type: "update_quantity_pending" });
      return axios
        .patch(
          `http://localhost:8001/cart/get-update-quantity/${id}?updatetype=${type}`
        )
        .then((res) => {
          //console.log(res.data);
          dispatch({ type: "update_quantity_success", payload: res.data.data });
        })
        .catch((error) => {
          dispatch({ type: "update_quantity_failed", payload: error.message });
        });
    };
  };


  export const removeFromCart = (id) => {
    return (dispatch) => {
      dispatch({ type: "remove_cart_pending" });
      return axios
        .delete(`http://localhost:8001/cart/get-delete-cartItem/${id}`)
        .then((res) => {
          //console.log(res.data);
          dispatch({ type: "remove_cart_success", payload: res.data.data });
        })
        .catch((error) => {
          dispatch({ type: "remove_cart_failed", payload: error.message });
        });
    };
  };

