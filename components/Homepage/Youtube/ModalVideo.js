import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import ModalVideo from 'react-modal-video';
import { StyledBackdropWrapper } from './styled';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const ModalVideoComp = ({ id, title, backdrop }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => setIsOpen((prevState) => !prevState), []);

    return (
        <StyledBackdropWrapper>
            <div className="image-button">
                <img src={backdrop} alt={`solid-link-co-${title}`} />
                <button onClick={toggleOpen}>
                    <div>
                        <PlayCircleOutlineIcon />
                    </div>
                </button>
            </div>
            <p className="title">{title}</p>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId={id} onClose={toggleOpen} />
        </StyledBackdropWrapper>
    );
};

ModalVideoComp.propTypes = {
    backdrop: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ModalVideoComp;
