'use strict';

import PhonesService from "./services/phones-service.js";
import PhonesCatalogue from './components/phones-catalog.js'
import PhoneViewer from "./components/phone-viewer.js";
import ShoppingCart from "./components/shopping-cart.js";
import Search from "./components/search.js";
import Sorter from "./components/sorter.js";

export default class PhonesPage {
    constructor({ element }) {
        this._element = element;

        this._catalog = new PhonesCatalogue({
            element: this._element.querySelector('[data-component="phones-catalog"]'),
            phones: PhonesService.getPhones(),
        });

        //this._catalog._element.addEventListener('phoneSelected', (event)=> {
        this._catalog.on('phoneSelected', (event) => {
            let phoneId = event.detail;
            console.log(phoneId);
        });


        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]')
        });

        this._shoppingCart = new ShoppingCart({
            element: this._element.querySelector('[data-component="shopping-cart"]')
        });
        this._search = new Search({
            element: this._element.querySelector('[data-component="search"]')
        });
        this._sorter = new Sorter({
            element: this._element.querySelector('[data-component="sorter"]')
        });

    }
}