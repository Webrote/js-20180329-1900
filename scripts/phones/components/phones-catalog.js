"use strict";

import Component from "../../component.js";

export default class PhonesCatalogue extends Component{
    constructor({ element, phones }) {
        super({element});

        this._phones = phones;

        this._render();
        this._element.addEventListener('click', this._onPhoneClick.bind(this));
        
    }

    _onPhoneClick(event) {
        let phoneElement = event.target.closest('[data-element="phone"]');


        if(!phoneElement) {
            return;
        }

        this._trigger('phoneSelected', phoneElement.dataset.phoneId);

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
                                    <a href="#!/phones/${ phone.id }" class="thumb">
                                        <img alt="${ phone.name }" 
                                             src="${ phone.imageUrl }">
                                    </a>
                                    
                                    <div class="phones__btn-buy-wrapper">
                                        <a class="btn btn-success">Add</a>
                                    </div>
                                    <a href="#!/phones//${ phone.id }">
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