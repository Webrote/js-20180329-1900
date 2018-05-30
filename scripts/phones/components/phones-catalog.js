"use strict";

export default class PhonesCatalogue {
    constructor({ element, phones }) {
        this._element = element;
        this._phones = phones;

        this._render();

        this._element.addEventListener('click', this._onPhoneClick)
        
    }

    _onPhoneClick(event) {
        let phoneElement = event.target.closest('[data-element="phone"]')

        if(!phoneElement) {
            return;
        }

        alert(phoneElement.dataset.phoneId);

    }
    
    _render() {
        this._element.innerHTML = `
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