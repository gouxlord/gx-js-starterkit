import { Promise } from 'es6-promise';

const addText = function(payload){
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve(payload)
        }, 2000)
    })
};

export default {
    addText
};