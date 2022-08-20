import React from 'react';
import { useField } from 'formik';
import classes from './styled.module.scss';

const InputField = ({ name, type, label, placeholder, required, options = [], pattern, fullWidth }) => {
    const [field, { error, touched }] = useField(name);

    const isTextInput = type === 'text';
    const isTextArea = type === 'textarea';
    const isDateInput = type === 'date';
    const isSelectInput = type === 'select';
    const isTelephoneInput = type === 'tel';

    const showError = touched && error;

    return (
        <div
            className={`${classes.InputWrapper} ${isTextArea ? classes.isTextArea : ''} ${
                fullWidth ? classes.fullWidth : ''
            }`}
        >
            <label htmlFor={name} className={classes.Label}>
                {label} {required && <span>*</span>}
            </label>
            {isTextInput ? (
                <input
                    className={`${classes.Input} ${showError ? classes.HasError : ''}`}
                    name={name}
                    id={name}
                    type="text"
                    {...field}
                    placeholder={placeholder}
                />
            ) : null}

            {isTextArea ? (
                <textarea
                    className={`${classes.Textarea} ${showError ? classes.HasError : ''}`}
                    name={name}
                    id={name}
                    {...field}
                    placeholder={placeholder}
                />
            ) : null}

            {isDateInput ? (
                <input
                    className={`${classes.Input} ${showError ? classes.HasError : ''}`}
                    name={name}
                    id={name}
                    type="date"
                    {...field}
                    placeholder={placeholder}
                />
            ) : null}

            {isSelectInput ? (
                <select
                    className={`${classes.Input} ${showError ? classes.HasError : ''}`}
                    name={name}
                    id={name}
                    {...field}
                >
                    <option value="">Select {placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : null}

            {isTelephoneInput ? (
                <input
                    className={`${classes.Input} ${showError ? classes.HasError : ''}`}
                    name={name}
                    id={name}
                    type="tel"
                    pattern={pattern}
                    {...field}
                    placeholder={placeholder}
                />
            ) : null}

            {showError && <p className={classes.Error}>{error}</p>}
        </div>
    );
};

export default InputField;