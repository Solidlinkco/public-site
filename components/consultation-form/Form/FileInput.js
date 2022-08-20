import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from 'formik';
import classes from './styled.module.scss';
import { CloseIcon } from '../../../assets/icons';

export const FileInput = ({ name, label, files, setFiles, fileErrorMessage }) => {
    const file = files.find((file) => file.inputId === name);

    const onDrop = (acceptedFiles) => {
        setFiles({
            files: acceptedFiles[0],
            inputId: name,
        });
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            document: ['.docx'],
            image: ['.jpg', '.jpeg', '.png'],
        },
    });

    const handleRemoveFile = () => {
        const newFiles = files.filter((file) => file.inputId !== name);
        setFiles(newFiles);
    };

    return (
        <div className={`${classes.InputWrapper} ${classes.fullWidth}`}>
            <label htmlFor={name} className={classes.Label}>
                {label}
            </label>

            {file && (
                <div className={classes.FileContainer}>
                    <p>{file.name}</p>
                    <button type="button" aria-label={`remove ${file.name}`} onClick={handleRemoveFile}>
                        <CloseIcon />
                    </button>
                </div>
            )}

            {!file && (
                <div className={`${classes.FileInput} ${isDragActive ? classes.isDragActive : ''}`} {...getRootProps()}>
                    <input name={name} id={name} {...getInputProps()} />
                    <div className={classes.Placeholders}>
                        {isDragActive && (
                            <>
                                <p>Drop File Here..</p>
                            </>
                        )}
                        {!isDragActive && !file && (
                            <>
                                <p>Drag & drop file here</p>
                                <p>or</p>
                                <p>Browse file</p>
                            </>
                        )}
                    </div>
                </div>
            )}

            {fileErrorMessage && <p className={classes.Error}>{fileErrorMessage}</p>}
        </div>
    );
};
