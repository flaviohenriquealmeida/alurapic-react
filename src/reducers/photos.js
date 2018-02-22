import c from '../constants/actionTypes';

const initialState = {
    photos: [],
    filteredPhotos: [],
    noPhotos: true,
    error: null,
};

export const photosReducer = (state=initialState, action) => {

    switch (action.type) {

        case c.FETCH_PHOTOS_FULFILLED: {
            return {
                ...state,
                photos: action.payload,
                filteredPhotos: [...action.payload]
            }
        }

        case c.FETCH_PHOTOS_REJECTED: {
            return { ...state, error: action.payload }
        }

        case c.FILTER_PHOTOS: {

            const searchText = action.payload.toLowerCase();
        
            if(!searchText) return {...state, filteredPhotos: [...state.photos]};
        
            const filteredPhotos = state.photos
                .filter(photo => photo.titulo.toLowerCase().includes(searchText));

            const noPhotos = !!state.filteredPhotos;
                        
            return { ...state, filteredPhotos, noPhotos };
        }

        case c.PHOTO_DELETED_FULFILED: {
            const id = action.payload;
            const photos = state.photos.filter(photo => photo._id !== id);
            const filteredPhotos = state.filteredPhotos.filter(photo => photo._id !== id);
            return { ...state, photos, filteredPhotos }
        }

        default:
            return state;
    }
}
