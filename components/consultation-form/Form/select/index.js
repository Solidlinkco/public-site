import React, { useMemo } from 'react';
import Select from 'react-select';
import { StyledFilterWrapper } from './styled';

const customSelectStyles = {
    container: (provided) => ({
        ...provided,

        background: 'red',
        borderRadius: '4px',
        // overflow: 'hidden',
        height: '54px',
        // border: "1px solid red",
    }),
    option: (provided) => ({
        ...provided,
        // fontSize: '12px',
        // fontWeight: 700,
        // color: 'black',
        // textTransform: 'capitalize',
        // // border: "1px solid orange",
        // display: 'flex',
        // cursor: 'pointer',
        // '&:hover': {
        //     background: '#f5f6f7 !important',
        // },
    }),
    control: (provided, state) => ({
        ...provided,
        padding: '3px 5px 3px 5px',
        borderRadius: '4px',
        color: '#000',
        fontSize: '14px',
        textTransform: 'capitalize',
        border: state.menuIsOpen ? '1px solid #000 !important' : '1px solid rgba(255, 255, 255, 0',
        background: '#fff',
        zIndex: '1',
        // borderBottom: "1px solid #E1E3E7 !important",
        boxShadow: 'none',
        width: '100%',
    }),

    // indicatorsContainer: (provided, state) => ({
    //     ...provided,
    //     transform: state.menuIsOpen ? 'rotateX(90deg)' : 'none',
    // }),
    // indicatorSeparator: () => ({
    //     display: 'none',
    // }),
};

export const SelectInput = ({ options, placeholder, setValue, ...rest }) => {
    const handleChange = (selectedOption) => {
        setValue(selectedOption.value, true);
    };

    return (
        <StyledFilterWrapper>
            <Select
                options={options}
                styles={customSelectStyles}
                onChange={handleChange}
                placeholder={placeholder}
                className="react-select"
                classNamePrefix="react-select"
            />
        </StyledFilterWrapper>
    );
};
