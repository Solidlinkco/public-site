import * as React from 'react';
import { useFormikContext } from 'formik';

import { ButtonRounded } from '../../atoms/ButtonRounded';
import classes from './styled.module.scss';

const SubmitButton = () => {
    const { isSubmitting, handleSubmit } = useFormikContext();
    return (
        <div className={classes.SubmitButton}>
            <ButtonRounded
                label="Submit"
                as="button"
                disabled={isSubmitting}
                onClick={handleSubmit}
                childrenPlaceMent="right"
            >
                {isSubmitting && <span className={classes.Loader}>&nbsp;</span>}
            </ButtonRounded>
        </div>
    );
};

export default SubmitButton;
