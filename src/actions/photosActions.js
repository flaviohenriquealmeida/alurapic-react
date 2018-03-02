import { photoService as service } from '../shared/Photo';
import c from '../constants/actionTypes';

// assincronous
export const fetchPhotos = () => (dispatch, getState) => {
    service
        .listAll()
        .then(photos =>  dispatch({ type: c.FETCH_PHOTOS_FULFILLED, payload: photos }))
        .catch(err => dispatch({ type: c.FETCH_PHOTOS_REJECTED, payload: err }))
};
// sincronous
export const filterPhotos = text => ({
    type: 'FILTER_PHOTOS',
    payload: text
});

export const removePhoto = id => (dispatch, getState) => {
    service
        .remove(id)
        .then(() =>  dispatch({ type: c.PHOTO_DELETED_FULFILED, payload: id }))
        .catch(err => dispatch({ type: c.PHOTO_DELETED_REJECTED, payload: err }))
};