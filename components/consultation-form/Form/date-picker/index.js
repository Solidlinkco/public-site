import React from 'react';
import { DayPicker } from 'react-day-picker';
import classes from '../styled.module.scss';
import { format } from 'date-fns';

const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    React.useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

const css = `

.rdp-caption_label {
    color: rgba(64, 4, 54, 1);
}
.rdp-button {
    border-radius: 4px;
}
.rdp-button:hover {
    background-color: rgba(64, 4, 54, 0.1) !important;
}
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 1.5px solid rgba(64, 4, 54, 1);
    color: rgba(64, 4, 54, 1);
    background-color: rgba(64, 4, 54, 0.1);

  }
  .my-selected:hover:not([disabled]) { 
    border-color: rgba(64, 4, 54, 0.4);
  }
  .rdp-head_cell {
    font-size: 1.4rem;
    color: rgba(64, 4, 54, 1);

  }
`;

export const DatePicker = ({ showError, placeholder, id, name, setValue, field, setTouched }) => {
    const [showPicker, setShowPicker] = React.useState(false);
    const [selected, setSelected] = React.useState();
    const onSelect = (day) => {
        setValue(format(day, 'PP'));
        setSelected(day);
        setShowPicker(false);
    };

    const clickRef = React.useRef();
    useClickOutside(clickRef, () => setShowPicker(false));

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                position: 'relative',
                tabIndex: 0,
            }}
            ref={clickRef}
        >
            <input
                className={`${classes.Input} ${showError ? classes.HasError : ''}`}
                name={name}
                id={id}
                type="text"
                placeholder={placeholder}
                onFocus={() => setShowPicker(true)}
                value={field.value}
                onClick={() => setTouched(true)}
            />
            {showPicker && (
                <div className={`${classes.DayPicker} `}>
                    <style>{css}</style>
                    <DayPicker
                        mode="single"
                        onSelect={onSelect}
                        selected={selected}
                        modifiersClassNames={{
                            selected: 'my-selected',
                            head: 'custom-head',
                        }}
                        modifiersStyles={{
                            disabled: { fontSize: '75%' },
                        }}
                        disabled={[
                            {
                                from: new Date(),
                                to: new Date(10000, 0, 1),
                            },
                        ]}
                    />
                </div>
            )}
        </div>
    );
};
