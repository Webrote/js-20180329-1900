'use strict';

const PhonesService = {
    loadPhones(callback) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/api/phones', true);

        xhr.send();

        xhr.onload = () => {

            let data = JSON.parse(xhr.responseText);
            callback(data);
        };
    },

    loadPhone(phoneId, callback) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/api/phones/' + phoneId, true);

        xhr.send();

        xhr.onload = () => {

            let data = JSON.parse(xhr.responseText);
            callback(data);
        };
    },

}

export default PhonesService;