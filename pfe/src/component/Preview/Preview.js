export const Preview = ({files}) => {
    if (!files.length) {
        return null
    }

    return files.map((file) => <img style={{maxWidth: '200px'}} src={`http://localhost:4000/${file.filename}`} alt={file.originalname}/>);
};