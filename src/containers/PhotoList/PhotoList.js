import React, { Component } from 'react';
import { Photo } from '../../shared/Photo';
import { Card } from '../../shared/Card/Card';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as PhotosAction from '../../actions/photosActions';
import { Button } from '../../shared/Button/Button';

class PhotoList extends Component {

    componentWillMount() {
        this.props.fetchPhotos();
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
                        <input onKeyUp={e => this.props.filterPhotos(e.target.value)} className="form-control" placeholder="filter by title"/>
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
                                        <Button parentMethod={ () => this.props.removePhoto(photo._id)} bsType="primary" text="Remove"/>
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


/*
Como usamos connect (redux-react), não precisamos fazer bindActionCreators
*/
// https://www.reddit.com/r/reactjs/comments/6fxlaz/when_to_use_mapdispatchtoprops_vs_action_creator/

/*
const mapDispatchToProps = dispatch => 
    bindActionCreators(PhotosAction, dispatch);
*/

const mapDispatchToProps = {
    ...PhotosAction
};

const mapStateToProps = state => ({  
    photos : state.photosReducer.photos,
    filteredPhotos: state.photosReducer.filteredPhotos,
    noPhotos: state.photosReducer.noPhotos
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoList));