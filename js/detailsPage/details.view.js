import content from "./template/details.template.js";
import NavbarContent from './template/detailNavbar.template.js'

class CardView{
    constructor(selector, navbarSelector){
        this.selector = selector;
        this.viewContent = this.getElement(selector);
        this.navbarContent = this.getElement(navbarSelector);
        this.displayNavbar();
        this.displayCard(null);
    };

    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    };

    getUrlParams(){
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        return url.searchParams.get("id");
    };

    displayCard(data){
        this.viewContent.display = 'flex';
        this.viewContent.innerHTML = "";
        if(data == null){
            this.viewContent.innerHTML += `<div class="loading">LoadingContent......</div>`;
        }else{
            const container = document.querySelector(this.selector);
            container.innerHTML = "";
            container.innerHTML += content(data);
        }
    };

    displayNavbar(){
        this.navbarContent.innerHTML += NavbarContent;
    }

};


export default CardView;