import * as React from 'react';
import { useFormikContext } from 'formik';
import isEmpty from 'lodash/isEmpty';
import { ButtonRounded } from '../../atoms/ButtonRounded';
import classes from './styled.module.scss';
import useSearch from '../../../hooks/useSearch';

import StyledButton from '../../atoms/StyledButton';
const SubmitButton = () => {
    const [searchParams] = useSearch();

    const { isSubmitting, handleSubmit } = useFormikContext();

    const showLoadingSpinner = isSubmitting || !isEmpty(searchParams.reference);

    return (
        <div className={classes.SubmitButton}>
            <StyledButton type="submit" label="Submit" as="button" disabled={showLoadingSpinner} onClick={handleSubmit}>
                Submit
                {showLoadingSpinner && <span className={classes.Loader}>&nbsp;</span>}
            </StyledButton>
        </div>
    );
};

export default SubmitButton;
