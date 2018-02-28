import React from 'react';
import PropTypes from 'prop-types'

/* You have to convert a functional component to a class if you need 
lifecycle methods, refs, or want to optimize performance using 
shouldComponentUpdate/PureComponent.
*/
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