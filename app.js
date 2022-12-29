const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs')
const dotenv = require('dotenv');
//const mongoose = require('mongoose')
const fileSchema = require('./models/FilesSchema') 
require('dotenv').config()
const connectDB = require('./config/connectDB');
connectDB()
//mongoose.set('strictQuery', true);
 

const app = express();

app.use(cors());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "myUploads")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage})

app.post("/filesAPI/upload",upload.array('files'),(req,res)=>{
    var final_files = req.files.map(f => {
        var data = fs.readFileSync(f.path);
        var file = {
            contentType: f.mimetype,
            buffer: data
        };

        return {
            name: f.originalname,
            file: file
        }
    })

    fileSchema.create(final_files, function(err,result){
        if(err) {
            console.log(err);
        } else {
            console.log("Saved To database");
            res.send(final_files);
        }
    })
})

app.get("/filesAPI/list", (req, res) => {
    fileSchema.find({}, (err, result) => {
        console.log(`==> getting ${result.length} file`)
        res.send({files: result})
    })
})

var port = process.env.PORT || '4000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server is running on port', port)
})