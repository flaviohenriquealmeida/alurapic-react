const API = 'http://localhost:3000/v1/fotos';

const handleResponse = res => res.ok 
    ? res.json() 
    : Promise.reject(res.statusText)

class PhotoService {

    listAll() {
        return fetch(API)
            .then(handleResponse)
            .catch(err => {
                console.log(err);
                return Promise.reject("Can't load images");
            })
    }
}

export const photoService = new PhotoService();