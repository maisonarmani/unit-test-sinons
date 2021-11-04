import axios from 'axios'
export default class Tester{
    async getAlbumById (id) {
        const requestUrl = `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=10`;
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
