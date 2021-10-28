"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const request = require('request');

class Tester {
  async getAlbumById(id) {
    const requestUrl = `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=5`;
    return new Promise((resolve, reject) => {
      request.get(requestUrl, (err, res, body) => {
        if (err) {
          return reject(err);
        }

        resolve(JSON.parse(body));
      });
    });
  }

}

exports.default = Tester;