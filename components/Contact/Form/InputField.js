import React from 'react';
import { useField } from 'formik';
import { StyledInputBox } from './styled';

const InputField = ({ name, type, label, placeholder }) => {
    const [field, { error }] = useField(name);
    return (
        <StyledInputBox>
            <label for={name}>{label}</label>
            {type === 'text' ? (
                <input name={name} id={name} type="text" {...field} placeholder={placeholder} />
            ) : (
                <textarea name={name} id={name} {...field} placeholder={placeholder} />
            )}
            {error && <p>{error}</p>}
        </StyledInputBox>
    );
};

export default InputField;
