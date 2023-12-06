import axios from "axios";


export const  getSubcatgoryAll = () =>{
    return (dispatch) => {
        dispatch({ type: "GET_SUBCATEGORY_PENDING" });
        axios
            .get(`http://localhost:8001/sub-categories/get-subcat`)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "GET_SUBCATEGORY_SUCCESS", payload: res.data })

            })
            .catch((err) => {
                dispatch({ type: "GET_SUBCATEGORY_FAILED", payload: err.message })
            })
    };
};

// export const getAddSubcategory = (data) =>{
//     return (dispatch) => {
//         dispatch({ type: "ADD_SUBCATEGORY_PENDING" });
//         return axios
//             .post(`http://localhost:8001/sub-categories/get-add-subcat`, data)
//             .then((res) => {
//                 console.log(res.data);
//                 dispatch({ type: "ADD_SUBCATEGORY_SUCCESS", payload: res.data })
//                 return Promise.resolve()
//             })
//             .catch((err) => {
//                 dispatch({ type: "ADD_SUBCATEGORY_FAILED", payload: err.message })
//                 return Promise.reject()
//             })
//     };
// };