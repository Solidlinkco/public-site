import React, { useMemo } from 'react';
import Select from 'react-select';
import Search from '../../Blogs/Search';
import { StyledFilterWrapper } from './styled';
import { COUNTRY_LIST } from '../../../constants/CountryIso';

const customSelectStyles = {
    container: (provided) => ({
        ...provided,

        background: 'red',
        borderRadius: '6px',
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
        borderRadius: '6px',
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

const generateList = (schools, title) => {
    if (title?.toLowerCase() === 'institutions') {
        return schools?.filter((el) => !el?.isSecondarySchool).map((el) => el?.country ?? '');
    }
    return schools?.filter((el) => el?.isSecondarySchool).map((el) => el?.country ?? '');
};

const generateOptions = (countries) => {
    return countries.map((el) => {
        const label = COUNTRY_LIST.find((country) => country['alpha-3'] === el)?.name ?? el;
        return { value: el, label };
    });
};

const MultiSelect = ({ schools, title }) => {
    const countries = useMemo(() => [...new Set(generateList(schools, title)?.filter(Boolean))] ?? [], [schools]);
    const options = generateOptions(countries);
    return (
        <StyledFilterWrapper>
            <Search margin="0" />
            <Select
                options={options}
                styles={customSelectStyles}
                placeholder="Filter by country"
                isMulti
                className="react-select"
                classNamePrefix="react-select"
            />
        </StyledFilterWrapper>
    );
};

export default MultiSelect;
