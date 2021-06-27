import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { func, number, oneOfType, string, node, arrayOf, shape } from 'prop-types';
import { CheckmarkBlack } from '../../assets/icons';
import { P14 } from './P14';
import { BlockWrap } from './BlockWrap';
import { FlexContainer } from './FlexContainer';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '200px',
  },
  item: {
    padding: '8px',
    display: 'block',
    cursor: 'pointer',
    width: '100%',
    '&:hover': {
      background: '#f1f1f1',
    },
    '&.active': {
      background: '#f3f3f3',
    },
  },
}));
const TableFilterActionButton = ({ action, options, active, selected }) => {
  const classes = useStyles();
  const hasCheckmark = useCallback((value) => selected === value, [selected]);

  return (
    <FlexContainer padding="8px 8px 10px" justifyContent="flex-start" alignItems="flex-start" className={classes.root}>
      {options.map((item, i) => (
        <div
          className={`${classes.item} ${active === i && 'active'}`}
          key={`${item.value}`}
          onClick={() => {
            const setVal = { value: item.value, numberItem: i };
            action(setVal);
          }}
        >
          <P14>
            {item.label}
            {hasCheckmark(item.value) && (
              <BlockWrap margin="0 0 0 auto">
                <CheckmarkBlack />
              </BlockWrap>
            )}
          </P14>
        </div>
      ))}
    </FlexContainer>
  );
};

TableFilterActionButton.propTypes = {
  options: arrayOf(
    shape({
      value: string,
      label: node,
    })
  ),
  action: func,
  active: oneOfType([number, string]),
  selected: string.isRequired,
};

TableFilterActionButton.defaultProps = {
  options: [],
  action: () => false,
  active: '',
};

export default TableFilterActionButton;
