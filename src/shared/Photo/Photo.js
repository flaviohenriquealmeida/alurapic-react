import React from 'react';
import PropTypes from 'prop-types';

export const Photo = props =>
    (<img 
        className="img-fluid img-thumbnail" 
        src={ props.url } 
        alt={ props.title }/>
    );
    
Photo.proptypes = {
    url: PropTypes.string,
    title: PropTypes.string
};
