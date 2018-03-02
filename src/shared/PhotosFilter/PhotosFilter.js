import React from 'react';
import PropTypes from 'prop-types'

export const PhotosFilter = props => (
    <input onKeyUp={e => props.onFilter(e.target.value)} className="form-control" placeholder="filter by title"/>
);

PhotosFilter.proptypes = { 
    onFilter: PropTypes.func 
};

