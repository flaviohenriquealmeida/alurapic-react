import { photoService as service } from '../shared/Photo';

// dispatch assíncrono
export const fetchPhotos = () => dispatch => {
    service
        .listAll()
        .then(photos =>  dispatch({ type: 'FETCH_PHOTOS_FULFILLED', payload: photos }))
        .catch(err => dispatch({ type: 'FETCH_TWEETS_REJECTED', payload: err }))
};

export const filterPhotos = text => ({
    type: 'FILTER_PHOTOS',
    payload: text
});

export const removePhoto = id => dispatch => {
    service
        .remove(id)
        .then(() =>  dispatch({ type: 'PHOTO_DELETED_FULFILED', payload: id }))
        .catch(err => dispatch({ type: 'PHOTO_DELETED_REJECTED', payload: err }))
};