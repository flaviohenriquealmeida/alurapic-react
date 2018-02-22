import { photoService as service } from '../shared/Photo';

// dispatch assíncrono
export const fetchPhotos = () => dispatch => {
    service
        .listAll()
        .then(photos =>  dispatch({ type: "FETCH_PHOTOS_FULFILLED", payload: photos }))
        .catch(err => dispatch({ type: "FETCH_TWEETS_REJECTED", payload: err }))
};

export const filterPhotos = text => ({
    type: 'FILTER_PHOTO',
    payload: text
});