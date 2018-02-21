const API = 'http://localhost:3000/v1/fotos';

const handleResponse = res => res.ok 
    ? res
    : Promise.reject(res.statusText)

const headers = new Headers();
headers.append('Content-Type', 'application/json');

class PhotoService {

    listAll() {
        return fetch(API)
            .then(handleResponse)
            .then(res => res.json())
            .catch(err => {
                console.log(err);
                return Promise.reject("Can't load photos");
            });
    }

    update(photo) {
        console.log(photo);
        const config  = {
            method: 'put',
            headers,
            body: JSON.stringify(photo),
        };

        return fetch(`${API}/${photo._id}`, config)
            .then(handleResponse)
            .catch(err => {
                console.log(err);
                return Promise.reject("Can't update photo");
            });        
    }

    add(photo) {
        
        const config  = {
            method: 'post',
            headers,
            body: JSON.stringify(photo),
        };

        return fetch(API, config)
            .then(handleResponse)
            .catch(err => {
                console.log(err);
                return Promise.reject("Can't add photo");
            });
    }

    getById(id) {
        return fetch(`${API}/${id}`)
            .then(handleResponse)
            .then(res => res.json())
            .catch(err => {
                console.log(err);
                return Promise.reject("Can't load photo");
            });
            
    }

    remove(id) {
     
        const config  = { method: 'delete' };
    
        return fetch(`${API}/${id}`, config)
            .then(handleResponse)
            .catch(err => {
                console.log(err);
                return Promise.reject("Can't delete photo");
        });
    }
}

export const photoService = new PhotoService();