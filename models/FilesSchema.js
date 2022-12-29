const mongoose = require('mongoose')
const {Schema}=mongoose

    const fileSchema = new Schema({
        name:String,
        file:
        {
            buffer: Buffer,
            contentType: String
        }

    })

    module.exports=mongoose.model('file', fileSchema)