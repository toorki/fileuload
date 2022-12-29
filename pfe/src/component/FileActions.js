import axios from "axios"
import { ADD_NEW_FILE_FAIL, ADD_NEW_FILE_REQUEST, ADD_NEW_FILE_SUCCESS } from "./FileConstants"




export const addNewFile=(newFile)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_NEW_FILE_REQUEST})
        const {data} = await axios.post('http://localhost:4000/filesAPI/upload', newFile)
        dispatch({type:ADD_NEW_FILE_SUCCESS, payload:data})
    } catch (error) {
        dispatch ({type:ADD_NEW_FILE_FAIL})
    }
}