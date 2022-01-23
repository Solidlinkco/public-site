import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import ModalVideo from 'react-modal-video';
import { StyledBackdropWrapper } from './styled';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import format from 'date-fns/format';
import { enGB } from 'date-fns/locale';

const ModalVideoComp = ({ id, title, backdrop, isLarge, date }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => setIsOpen((prevState) => !prevState), []);
    const parsedDate = format(new Date(date || null), 'dd MMM, yyyy', {
        locale: enGB,
    });
    return (
        <StyledBackdropWrapper $isLarge={isLarge}>
            <div className="image-button">
                <img src={backdrop} alt={`solid-link-co-${title}`} />
                <button onClick={toggleOpen}>
                    <div>
                        <PlayCircleOutlineIcon />
                    </div>
                </button>
            </div>
            {!isLarge && (
                <div className="title">
                    <p>{title}</p>
                    <p className="title_date">Published on: {parsedDate}</p>
                </div>
            )}
            {process.browser && <ModalVideo channel="youtube" isOpen={isOpen} videoId={id} onClose={toggleOpen} />}
        </StyledBackdropWrapper>
    );
};

ModalVideoComp.propTypes = {
    backdrop: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ModalVideoComp;
