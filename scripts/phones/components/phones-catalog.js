"use strict";

import Component from "../../component.js";

export default class PhonesCatalogue extends Component{
    constructor({ element, phones }) {
        super({element});

        this._phones = phones;

        this._render();
        this._element.addEventListener('click', this._onDetailTriggerClick.bind(this));
        this._element.addEventListener('click', this._onAddButtonClick.bind(this));

    }

    _onDetailTriggerClick(event) {
        let trigger = event.target.closest('[data-element="detail-trigger"]');


        if(!trigger) {
            return;
        }

        let phoneElement = event.target.closest('[data-element="phone"]');

        this._trigger('phoneSelected', phoneElement.dataset.phoneId);

    }

    _onAddButtonClick(event) {
        let addButton = event.target.closest('[data-element="add-button"]');


        if(!addButton) {
            return;
        }

        let phoneElement = event.target.closest('[data-element="phone"]');

        this._trigger('add', phoneElement.dataset.phoneId);

    }
    
    _render() {
        this._element.innerHTML = `
            <h2>Catalogue</h2>
            <ul class="phones">
                ${ 
                    this._phones
                        .map( (phone) => {
                            return `
                                 <li class="thumbnail" 
                                     data-element="phone"
                                     data-phone-id="${ phone.id }">
                                     
                                    <a href="#!/phones/${ phone.id }"
                                        data-element="detail-trigger" 
                                        class="thumb">
                                        <img alt="${ phone.name }" 
                                             src="${ phone.imageUrl }">
                                    </a>
                                    
                                    <div class="phones__btn-buy-wrapper">
                                        <a class="btn btn-success" data-element="add-button">Add</a>
                                    </div>
                                    
                                    <a href="#!/phones//${ phone.id }"
                                        data-element="detail-trigger">
                                        ${ phone.name }
                                    </a>
                                    <p>${ phone.snippet }</p>
                                </li>
                            `;
                        })
                        .join('')
                
                }
               
            </ul>
            
        `;
    }
}