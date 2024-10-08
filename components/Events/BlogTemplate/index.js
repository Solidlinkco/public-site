import React from 'react';
import classes from './styled.module.scss';

const CareerTemplate = ({ html, title, image, date }) => {
    return (
        <div className={classes.CareerTemplate}>
            <div className={classes.CareerTemplate__Header}>
                <h2 className="h3">{title}</h2>
                <p>Date Published: {date}</p>
                <img src={image} alt={title} />
            </div>

            <div className={classes.CareerTemplate__Body} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
};
export default CareerTemplate;
