const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.URI)
        console.log('db is connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDB

/*  { useNewUrlParser: true, useUnifiedTopology: true }, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('db is connected...')
            }
        }*/