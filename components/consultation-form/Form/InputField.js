import React from 'react';
import { useField } from 'formik';
import classes from './styled.module.scss';
import { SelectInput } from './select';
import { DatePicker } from './date-picker';

export const InputField = ({ name, type, label, placeholder, required, options = [], pattern, fullWidth, helperText, customClassName }) => {
    const [field, { error, touched }, { setValue, setTouched }] = useField(name);

    const isTextInput = type === 'text' || type === 'email';
    const isTextArea = type === 'textarea';
    const isDateInput = type === 'date';
    const isSelectInput = type === 'select';
    const isTelephoneInput = type === 'tel';

    const showError = touched && error;

    return (
        <div
            className={`${classes.InputWrapper} ${isTextArea ? classes.isTextArea : ''} ${
                fullWidth ? classes.fullWidth : ''
            } ${customClassName || ""}`}
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
                <DatePicker
                    className={`${classes.Input} ${showError ? classes.HasError : ''}`}
                    name={name}
                    id={name}
                    type="text"
                    field={field}
                    placeholder={placeholder}
                    showError={showError}
                    setValue={setValue}
                    setTouched={setTouched}
                />
            ) : null}

            {isSelectInput ? (
                <SelectInput name={name} {...field} options={options} setValue={setValue} />
            ) : // <select
            //     className={`${classes.Input} ${showError ? classes.HasError : ''}`}
            //     name={name}
            //     id={name}
            //     {...field}
            // >
            //     <option value="">Select {placeholder}</option>
            //     {options.map((option) => (
            //         <option key={option.value} value={option.value}>
            //             {option.label}
            //         </option>
            //     ))}
            // </select>
            null}

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
            {helperText && <p className={classes.HelperText}>{helperText}</p>}
            {showError && <p className={classes.Error}>{error}</p>}
        </div>
    );
};

export default InputField;
