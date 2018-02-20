import React, { Component } from 'react';

export class Photo extends Component {
    
    render() {
        return (
            <img className="img-fluid img-thumbnail" src={ this.props.url } alt={ this.props.title }/>
        );
    }
}