import React, { Component } from 'react';
import { Photo, photoService as service } from '../../shared/Photo';
import Card from '../../shared/Card/Card';
import { Link } from 'react-router-dom';

class PhotoList extends Component {

    constructor() {
        super();
        this.state = { photos : []};
    }
    
    componentWillMount(){

        service.listAll()
            .then(photos => this.setState({ photos }));
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="text-center">Alurapic</h1>
                </div>
                <div className="container">
                    <form>
                        <div className="input-group">
                        <Link className="btn btn-primary" to="/form">New Photo</Link>
                        <input className="form-control" placeholder="filtrar pelo título da foto"/>
                        </div>
                    </form>
                    <br/>
                    <ul className="list-inline">
                    {
                        this.state.photos.map(photo =>
                            (
                                <li>
                                    <Card title={ photo.titulo }>
                                       <Photo url={ photo.url } title={ photo.title }/>
                                    </Card>
                                </li>
                            )
                        )
                    }
                    </ul>
                </div>
            </div>  
        );
    }
}

export default PhotoList;