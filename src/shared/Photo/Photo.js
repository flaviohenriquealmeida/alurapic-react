import React from 'react';

export const Photo = props =>
    (<img 
        className="img-fluid img-thumbnail" 
        src={ props.url } 
        alt={ props.title }/>
    );
    