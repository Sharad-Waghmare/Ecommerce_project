import axios from "axios";

export const getCategoryAll = () =>{
    return (dispatch) =>{
        dispatch( { type: "GET_CATEGORY_PENDING" });
        axios
        .get(`http://localhost:8001/categories/get-category`)
        .then((res) =>{
            console.log(res.data);
            dispatch( { type: "GET_CATEGORY_SUCCESS", payload: res.data })
        })
        .catch((err) =>{
            dispatch( { type: "GET_CATEGORY_FAILED", payload: err.message})
        })
    }
};

// export const getAddcategory = (data) =>{
//     return (dispatch) => {
//         dispatch({ type: "ADD_CATEGORY_PENDING" });
//         return axios
//             .post(`http://localhost:8001/categories/get-add-category`, data)
//             .then((res) => {
//                 console.log(res.data);
//                 dispatch({ type: "ADD_CATEGORY_SUCCESS", payload: res.data })
//                 return Promise.resolve()
//             })
//             .catch((err) => {
//                 dispatch({ type: "ADD_CATEGORY_FAILED", payload: err.message })
//                 return Promise.reject()
//             })
//     };
// };

// export const getSingleCategory = (id) =>{
//     console.log(id)
//     return (dispatch) => {
//         dispatch({ type: "GET_SINGLECATEGORY_PENDING" });
//       return  axios
//             .get(`http://localhost:8001/categories/get-single-categorys/${id}`)
//             .then((res) => {
//                 console.log(res.data);
//                 dispatch({ type: "GET_SINGLECATEGORY_SUCCESS", payload: res.data })
//                 return Promise.resolve()

//             })
//             .catch((err) => {
//                 dispatch({ type: "GET_SINGLECATEGORY_FAILED", payload: err.message })
//                 return Promise.reject()
//             })
//     };
// }

// export const getEditCategory = (id, data) => {
//     return(dispatch) => {
//         console.log(id)
//         dispatch({ type: "EDIT_CATEGORY_PENDING" });
//         return axios
//           .put(`http://localhost:8001/categories/get-udpate-categorys/${id}`, data)

//           .then((res) => {
//             console.log(res.data);
//             dispatch({ type: "EDIT_CATEGORY_SUCCESS", payload: res.data });
//             return Promise.resolve()
            
//           })
//           .catch((err) => {
//             dispatch({ type: "EDIT_CATEGORY_FAILED", payload: err.message });
//             return Promise.reject()
            
//           });
//       };
// };



// export const getDeleteCategory = (id)=>{
//     return(dispatch) =>{
//         dispatch({ type: "DELETE_CATEGORY_SUCCESS"});
//         return axios
//         .delete(`http://localhost:8001/categories/get-delete-categorys/${id}`)
//         .then((res)=>{
//           console.log(res);
//           dispatch({ type: "DELETE_CATEGORY_SUCCESS", payload: res.data });
//         })
//         .catch((err)=>{
//           console.log(err);
//           dispatch({ type: "DELETE_CATEGORY_FAILED", payload: err.message });
//         })
//       }
// }