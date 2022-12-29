import { ADD_NEW_FILE_FAIL, ADD_NEW_FILE_REQUEST, ADD_NEW_FILE_SUCCESS } from "./FileConstants"




export const addNewFileReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_NEW_FILE_REQUEST:
            return {loading: true}
        case ADD_NEW_FILE_SUCCESS:
            return {loading: false, newImage:action.payload}  
        case ADD_NEW_FILE_FAIL:
            return {loading: false, error:"server is down! we're working on it.."}               
        default:
            return state
    }
}