import React, { Component } from 'react';
import { Photo } from '../../shared/Photo';
import Card from '../../shared/Card/Card';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPhotos, filterPhotos, removePhoto } from '../../actions/photosActions';

class PhotoList extends Component {

    constructor() {
        super();
        this.filterPhotos = this.filterPhotos.bind(this);
        this.removePhotos = this.removePhoto.bind(this);
    }

    componentWillMount() {
        this.props.fetchPhotos();
    }
    
    filterPhotos(event) {
        const searchText = event.target.value.toLowerCase();
        console.log(searchText);
        this.props.filterPhotos(searchText);
    }

    removePhoto(id) {
        
        this.props.removePhoto(id);
    }

    render() {
        const noPhotos = this.props.noPhotos;
        
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
                        this.props.filteredPhotos.map(photo =>
                            (
                                <li key={ photo._id }>
                                    <Card title={ photo.titulo }>
                                    <Link to={'/form/' + photo._id }>
                                        <Photo url={ photo.url } title={ photo.title }/>
                                    </Link>
                                    </Card>
                                    <div className="text-center">
                                        <button onClick={ this.removePhoto.bind(this, photo._id)} className="btn btn-danger">Remover</button>
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

const mapDispatchToProps = {
    fetchPhotos, filterPhotos, removePhoto
};

const mapStateToProps = state => ({  
    photos : state.photosReducer.photos,
    filteredPhotos: state.photosReducer.filteredPhotos,
    noPhoto: state.photosReducer.noPhoto
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoList));