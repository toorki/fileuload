const files = require('../models/FilesSchema')
const path = require('path')

const addNewFile = async(req,res)=>{
    try {
        
        for (let i = 0; i < req.files.length; i++){
            newFiles.push(req.files[i].path)
        }
        const newFile = new files(data)
        
        return res.json({message:'file uploaded successfully',newFile})
    } catch (error) {
        return res.json({message:error})
    } 
}


module.exports={addNewFile}