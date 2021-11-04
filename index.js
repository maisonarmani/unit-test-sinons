import axios from 'axios'
export default class Tester{
    async getAlbumById (id) {
        const requestUrl = `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=5`;
        return new Promise((resolve, reject) => {
            axios.get(requestUrl, (err, res, body) => {
                if (err) {
                    return reject(err);
                }
                resolve(JSON.parse(body));
            });
        });
    }
    
    async getAlbumByUserId (userId) {
        const requestUrl = `https://jsonplaceholder.typicode.com/albums/${userId}/photos?_limit=5`;
        return new Promise((resolve, reject) => {
            axios.get(requestUrl, (err, res, body) => {
                if (err) {
                    return reject(err);
                }
                resolve(JSON.parse(body));
            });
        });
    }
}
