import React from 'react';
import InputField from './InputField';
import classes from './styled.module.scss';
import isEmpty from 'lodash/isEmpty';

const NestedInput = ({ label, inputs }) => {
    if (isEmpty(inputs)) {
        return null;
    }

    return (
        <div className={classes.NestedInput}>
            <p className={classes.NestedInput__Label}>{label}</p>

            {inputs.map((field) => {
                return (
                    <InputField
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        options={field.options}
                        pattern={field.pattern}
                        fullWidth={field.fullWidth}
                        {...field}
                    />
                );
            })}
        </div>
    );
};

export default NestedInput;
