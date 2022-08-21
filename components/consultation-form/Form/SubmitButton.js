import * as React from 'react';
import { useFormikContext } from 'formik';

import { ButtonRounded } from '../../atoms/ButtonRounded';
import classes from './styled.module.scss';

import StyledButton from '../../atoms/StyledButton';
const SubmitButton = () => {
    const { isSubmitting, handleSubmit } = useFormikContext();
    return (
        <div className={classes.SubmitButton}>
            <StyledButton type="submit" label="Submit" as="button" disabled={isSubmitting} onClick={handleSubmit}>
                Submit
                {isSubmitting && <span className={classes.Loader}>&nbsp;</span>}
            </StyledButton>
        </div>
    );
};

export default SubmitButton;
