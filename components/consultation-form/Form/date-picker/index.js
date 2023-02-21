import React from 'react';
import { DayPicker } from 'react-day-picker';
import classes from '../styled.module.scss';
import { format } from 'date-fns';

export const DatePicker = ({ showError, placeholder, id, name, setValue, field, setTouched }) => {
    const previousRef = React.useRef();
    const touchRef = React.useRef(false);

    const onChange = (event) => {
        const value = event.target.value;
        // parse value to this format 10/02/2021

        if (value.length === 15) {
            return;
        }

        if (!touchRef.current) {
            setTouched(true, true);
            touchRef.current = true;
        }
        if (value.length === 2 || value.length === 7) {
            if (previousRef.current.length > value.length) {
                setValue(value);
                return;
            }

            setValue(value + ' / ');
            return;
        }
        previousRef.current = value;
        setValue(value);
    };

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                position: 'relative',
                tabIndex: 0,
            }}
        >
            <input
                className={`${classes.Input} ${showError ? classes.HasError : ''}`}
                name={name}
                id={id}
                type="text"
                {...field}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};
