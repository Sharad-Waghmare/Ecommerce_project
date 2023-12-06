import axios from "axios";


export const getUserAll = () => {
    return (dispatch) => {
        dispatch({ type: "GET_USER_PENDING" });
        axios
            .get(`http://localhost:8001/users/get-all-users`)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "GET_USER_SUCCESS", payload: res.data })

            })
            .catch((err) => {
                dispatch({ type: "GET_USER_FAILED", payload: err.message })
            })
    };
};


export const getAddUser = (data) =>{
    return (dispatch) => {
        dispatch({ type: "ADD_USER_PENDING" });
        return axios
            .post(`http://localhost:8001/users/add-users`, data)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "ADD_USER_SUCCESS", payload: res.data })
                return Promise.resolve()
            })
            .catch((err) => {
                dispatch({ type: "ADD_USER_FAILED", payload: err.message })
                return Promise.reject()
            })
    };
};


export const getSingleUser = (id) =>{
    console.log(id)
    return (dispatch) => {
        dispatch({ type: "GET_SINGLEUSER_PENDING" });
      return  axios
            .get(`http://localhost:8001/users/get-single-users/${id}`)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "GET_SINGLEUSER_SUCCESS", payload: res.data })
                return Promise.resolve()

            })
            .catch((err) => {
                dispatch({ type: "GET_SINGLEUSER_FAILED", payload: err.message })
                return Promise.reject()
            })
    };
}

export const getEdituser = (id, data) => {
    return(dispatch) => {
        console.log(id)
        dispatch({ type: "EDIT_USER_PENDING" });
        return axios
          .put(`http://localhost:8001/users/get-update-users/${id}`, data)

          .then((res) => {
            console.log(res.data);
            dispatch({ type: "EDIT_USER_SUCCESS", payload: res.data });
            return Promise.resolve()
            
          })
          .catch((err) => {
            dispatch({ type: "EDIT_USER_FAILED", payload: err.message });
            return Promise.reject()
            
          });
      };
}




export const getDeleteuser = (id)=>{
    return(dispatch) =>{
        dispatch({ type: "DELETE_USER_SUCCESS"});
        return axios
        .delete(`http://localhost:8001/users/get-delete-users/${id}`)
        .then((res)=>{
          console.log(res);
          dispatch({ type: "DELETE_USER_SUCCESS", payload: res.data });
        })
        .catch((err)=>{
          console.log(err);
          dispatch({ type: "DELETE_USER_FAILED", payload: err.message });
        })
      }
}