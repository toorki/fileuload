import React from 'react';
import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Preview } from './component/Preview/Preview';
import { FileUploader } from './component/FileUploader/FileUploader';

import './App.css';

function App() {
    const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };
      
  return (
    <div className="App">
      <FileUploader onSuccess={onSuccess}/>
      {/* <Preview files={files}/> */}
      <ToastContainer/>
    </div>
  );
}

export default App;
