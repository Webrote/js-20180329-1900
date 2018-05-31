'use strict';

const PhonesService = {
    loadPhones(callback) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/api/phones', true);

        xhr.send();

        xhr.onload = () => {
            console.log(xhr.responseText);

            let data = JSON.parse(xhr.responseText);
            callback(data);
        };


    }
}

export default PhonesService;