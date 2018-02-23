import React from 'react';

export const Card = props =>
    (
        <div className="card text-center">
            <h4 className="card-header">{ props.title }</h4>
            <div className="card-block">           
                { props.children }
            </div>
        </div>
    );
