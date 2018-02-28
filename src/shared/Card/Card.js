import React from 'react';
import PropTypes from 'prop-types'

export const Card = props =>
    (
        <div className="card text-center">
            <h4 className="card-header">{ props.title }</h4>
            <div className="card-block">           
                { props.children }
            </div>
        </div>
    );

Card.proptypes = { title: PropTypes.string }