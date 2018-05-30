"use strict";

import PhonesCatalogue from './_components/phones-catalog.js'

export default class PhonesPage {
    constructor({ element }) {
        this._element = element;

        this._catalog = new PhonesCatalogue({
            element: this._element.querySelector('[data-component="phones-catalog"]'),
            phones: [],
        })
    }
}