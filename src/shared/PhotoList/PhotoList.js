import React from 'react';
import { Photo } from '../Photo';
import { Card } from '../Card';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export const PhotoList = props => (
    <div>
        { !props.photos.length ? ( <p className="alert alert-warning">No photos found</p> ) : ''}
        <ul className="list-inline">
        {
            props.photos.map(photo =>
                (
                    <li key={ photo._id }>
                        <Card title={ photo.titulo }>
                        <Link to={'/form/' + photo._id }>
                            <Photo url={ photo.url } title={ photo.title }/>
                        </Link>
                        </Card>
                        <div className="text-center">
                            <Button parentMethod={ () => props.onRemove(photo._id)} bsType="primary" text="Remove"/>
                        </div>
                    </li>
                )
            )
        }
        </ul>
    </div>
);

PhotoList.proptypes = { 
    photos: PropTypes.array,
    onRemove: PropTypes.func 
};