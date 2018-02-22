const initialState = {
    photos: [],
    filteredPhotos: [],
    noPhotos: true,
    error: null,
};

export const photosReducer = (state=initialState, action) => {

    switch (action.type) {

        case 'FETCH_PHOTOS_FULFILLED': {
            return {
                ...state,
                photos: action.payload,
                filteredPhotos: [...action.payload]
            }
        }

        case 'FETCH_PHOTOS_REJECTED': {
            return { ...state, error: action.payload }
        }

        case 'FILTER_PHOTOS': {

            const searchText = action.payload.value.toLowerCase();
            
            if(!searchText) return {...state, filteredPhotos: [...state.photos]};
        
            const filteredPhotos = state.photos
                .filter(photo => photo.titulo.toLowerCase().includes(searchText));

            const noPhotos = !!state.filteredPhotos;
                        
            return { ...state, filteredPhotos, noPhotos };
        }
   
        default:
            return state;
    }
}
