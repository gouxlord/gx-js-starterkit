import es6Promise from 'es6-promise';
import isomorphicFetch from 'isomorphic-fetch'; // eslint-disable-line no-unused-vars

es6Promise.polyfill();

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

export const getLocalJson = function(url) {
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(checkStatus)
        .then(function(response){
            return response.json();
        })
        .catch(function(error){
            throw error;
        });
};

export default {
    getLocalJson: getLocalJson
}