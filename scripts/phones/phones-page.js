'use strict';

import PhonesService from "./services/phones-service.js";
import PhonesCatalogue from './components/phones-catalog.js'

export default class PhonesPage {
    constructor({ element }) {
        this._element = element;

        this._catalog = new PhonesCatalogue({
            element: this._element.querySelector('[data-component="phones-catalog"]'),
            phones: PhonesService.getPhones(),
        })

        //this._catalog._element.addEventListener('phoneSelected', (event)=> {
        this._catalog.on('phoneSelected', (event) => {
            let phoneId = event.detail;
            console.log(phoneId);
        })
    }
}