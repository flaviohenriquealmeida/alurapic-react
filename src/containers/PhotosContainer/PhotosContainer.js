import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as PhotosAction from '../../actions/photosActions';
import { PhotoList } from '../../shared/PhotoList';
import { PhotosFilter } from '../../shared/PhotosFilter';


class PhotosContainer extends Component {

    componentWillMount() {
        this.props.fetchPhotos();
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
                            <PhotosFilter 
                                onFilter={ this.props.filterPhotos }
                            />
                        </div>
                    </form>
                    <br/>
                    <PhotoList 
                        photos={ this.props.filteredPhotos } 
                        onRemove={ this.props.removePhoto }
                    />
                </div>
            </div>  
        );
    }
}

const mapDispatchToProps = {
    ...PhotosAction
};

const mapStateToProps = state => ({  
    photos : state.photosReducer.photos,
    filteredPhotos: state.photosReducer.filteredPhotos
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotosContainer));