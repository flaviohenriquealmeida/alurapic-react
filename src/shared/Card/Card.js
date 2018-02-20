import React, { Component } from 'react';

class Card extends Component {
    
    render() {
        return (
            <div className="card text-center">
                <h4 className="card-header">{ this.props.title }</h4>
                <div className="card-block">           
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Card;