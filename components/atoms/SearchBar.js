import { Box, IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { string, func } from 'prop-types';

import React from 'react';

const style = { outline: 'none' };

const SearchBar = ({ search, setSearch, bgcolor, borderRadius, paddingX, placeholder }) => {
  const onChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onClear = () => {
    setSearch('');
  };
  return (
    <Box
      height="40px"
      borderRadius={borderRadius}
      px={paddingX}
      bgcolor={bgcolor}
      display="flex"
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
    >
      <Box
        component="input"
        flexGrow={1}
        height="20px"
        bgcolor="transparent"
        border="0"
        style={style}
        placeholder={placeholder}
        fontSize={14}
        value={search}
        onChange={onChange}
      />
      {search !== '' && (
        <IconButton onClick={onClear} size="small">
          <Clear color="#787F88" />
        </IconButton>
      )}
    </Box>
  );
};

SearchBar.propTypes = {
  search: string.isRequired,
  setSearch: func.isRequired,
  bgcolor: string,
  borderRadius: string,
  paddingX: string,
  placeholder: string,
};
SearchBar.defaultProps = {
  bgcolor: '#F5F6F7',
  borderRadius: '8px',
  paddingX: '20px',
  placeholder: 'Search',
};

export { SearchBar };
