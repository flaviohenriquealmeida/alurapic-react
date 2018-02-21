import React, { Component } from 'react';
import { Photo, photoService as service } from '../../shared/Photo';
import Card from '../../shared/Card/Card';
import { Link } from 'react-router-dom';

class PhotoList extends Component {

    constructor() {
        super();
        this.state = { 
            photos : [], 
            filteredPhotos: [],
            noPhotos: false
        };
        this.filterPhotos = this.filterPhotos.bind(this);
    }
    
    componentWillMount(){

        service.listAll()
            .then(photos => {
                const filteredPhotos = [];
                filteredPhotos.push(...photos);
                this.setState({ photos, filteredPhotos });
            });
    }

    filterPhotos(event) {
        const searchText = event.target.value.toLowerCase();
        if(!searchText) return this.setState({ filteredPhotos: this.state.photos });
        const filteredPhotos = this.state.photos
            .filter(photo => photo.titulo.toLowerCase().includes(searchText));
        const noPhotos = !filteredPhotos.length;
        this.setState({ filteredPhotos, noPhotos });
    }

    render() {
        const noPhotos = this.state.noPhotos;
        // não pode chamar função direto no evento, dentro do render 
        //m dá loop infinito
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="text-center">Alurapic</h1>
                </div>
                <div className="container">
                    <form>
                        <div className="input-group">
                        <Link className="btn btn-primary" to="/form">New Photo</Link>
                        <input onKeyUp={this.filterPhotos} className="form-control" placeholder="filter by title"/>
                        </div>
                    </form>
                    <br/>

                    { noPhotos ? ( <p className="alert alert-warning">No photos found</p> ) : ''}

                    <ul className="list-inline">
                    {
                        this.state.filteredPhotos.map(photo =>
                            (
                                <li key={ photo._id }>
                                    <Card title={ photo.titulo }>
                                    <Link to={'/form/' + photo._id }>
                                        <Photo url={ photo.url } title={ photo.title }/>
                                    </Link>
                                    </Card>
                                    <div className="text-center">
                                        <button className="btn btn-danger">Remover</button>
                                    </div>
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