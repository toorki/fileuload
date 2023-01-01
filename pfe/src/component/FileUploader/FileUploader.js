import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import ('./Uploader.css');

export const FileUploader = ({onSuccess}) => {
    const [files, setFiles] = useState([]);
    const onInputChange = (e) => { 
        setFiles(e.target.files)
    };

    useEffect(() => {
        if (files.length === 0) {
            updateState()
        }
      }, [files]);

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
            setFilesList(res.data.files)
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
            return (<img src={`http://localhost:4000/${f.originalname}`} alt={f.originalname} />)
        })}
        </div>
        </div>
    )
};