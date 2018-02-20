const API = 'http://localhost:3000/v1/fotos';

const handleResponse = res => res.ok 
    ? res.json() 
    : Promise.reject(res.statusText)

const headers = new Headers();
headers.append('Content-Type', 'application/json');

class PhotoService {

    listAll() {
        return fetch(API)
            .then(handleResponse)
            .catch(err => {
                console.log(err);
                return Promise.reject("Can't load photos");
            });
    }

    save(photo) {

        const config  = {
            method: 'post',
            headers,
            body: JSON.stringify(photo),
        };

        return fetch(API, config)
            .then(handleResponse)
            .catch(err => {
                console.log(err);
                return Promise.reject("Can't load photos");
            });
    }
}

export const photoService = new PhotoService();