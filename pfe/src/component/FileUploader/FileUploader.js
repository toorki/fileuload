import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import ('./Uploader.css');

export const FileUploader = ({onSuccess}) => {
    const [files, setFiles] = useState([]);
    const onInputChange = (e) => { 
        setFiles(e.target.files)
    };

    const onSubmit = (e) => { 
        e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('files', files[i]);
        }

        axios.post('http://localhost:4000/filesAPI/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                onSuccess(response.data)
                updateState()
            })
            .catch((err) => {
                toast.error('Upload Error')
            })
    };

    // handle files listing
    const [filesList, setFilesList] = useState([]);

    const updateState = () => {
        axios.get("http://localhost:4000/filesAPI/list")
        .then(res => {
            // setFilesList(res.data.files)
            // console.log(filesList)

            var files = res.data.files.map(f => {
                console.log(f.file.buffer)
                let file = new Blob([f.file.buffer], { type: f.file.content_type })
                let url = URL.createObjectURL(file)
                return {name: f.name, img: url}
            })
            setFilesList(files)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file" className="form-control" onChange={onInputChange} multiple/>         
            </div>

            <button>Submit</button>
        </form>
        <div>
        {filesList.map(f => {
            return (<img src={f.img} alt={f.name} />)
        })}
        </div>
        </div>
    )
};