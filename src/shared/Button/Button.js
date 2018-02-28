import React from 'react';
import PropTypes from 'prop-types'

export const Button = props => {

    const clickHandler = () => 
        window.confirm('Are you sure?') && props.parentMethod();

    return (
        <button 
            onClick={ clickHandler } 
            className={"btn btn-" + props.bsType}>{ props.text }
        </button>
    );
}

Button.proptypes = { 
    text: PropTypes.string,
    bsType: PropTypes.string,
    parentMethod: PropTypes.func
};