import React from 'react';
import PropTypes from 'prop-types';

const FlexibleFrame = ({ src, title, height }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'block' }}>
            <iframe width={'100%'} height={height} src={src} frameBorder="0" title={title} name={title} />
        </div>
    );
};

FlexibleFrame.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    height: PropTypes.string,
};
FlexibleFrame.defaultProps = {
    height: '100%',
};
export default FlexibleFrame;
