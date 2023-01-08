import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import classes from './styled.module.scss';
import { CloseIcon } from '../../../assets/icons';
import isEmpty from 'lodash/isEmpty';
import { toast } from 'react-toastify';

const FILE_ERROR_MESSAGE = 'File is too large, Max. file size is 3mb. Please send large files to admin@solidlinkco.com';

export const FileInput = ({ name, label, files, setFiles, fileErrorMessage, required }) => {
    const file = files?.find((file) => file.inputId === name);

    const onDrop = (acceptedFiles) => {
        if (isEmpty(acceptedFiles)) {
            toast(FILE_ERROR_MESSAGE, {
                type: 'info',
                autoClose: 10000,
            });
            return;
        }

        setFiles((prevState) => [
            ...prevState,
            {
                file: acceptedFiles[0],
                fileName: acceptedFiles[0].name,
                inputId: name,
            },
        ]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            document: ['.docx'],
            image: ['.jpg', '.jpeg', '.png'],
        },
        maxSize: 3.2e6,
    });

    const handleRemoveFile = () => {
        const newFiles = files.filter((file) => file.inputId !== name);
        setFiles(newFiles);
    };

    return (
        <div className={`${classes.InputWrapper} ${classes.fullWidth}`}>
            <label htmlFor={name} className={classes.Label}>
                {label} {required && <span>*</span>} <em className={classes.MaxFile}>Max. Size (3mb)</em>
            </label>

            {file && (
                <div className={classes.FileContainer}>
                    <p>{file.fileName}</p>
                    <button type="button" aria-label={`remove ${file.fileName}`} onClick={handleRemoveFile}>
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
