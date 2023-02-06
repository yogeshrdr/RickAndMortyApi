import content from "./template/cards.template.js";
import searchTempalate from "./template/search.template.js";
import paginationBody from './template/pagination.template.js';

class MainView{
    constructor(selector, searchContainerSelector, searchSelector){
        this.viewContent = this.getElement(selector);
        this.searchContainerContent = this.getElement(searchContainerSelector);
        this.displaySearch();
        this.searchContent = this.getElement(searchSelector);
        this.displayCards([]);
    };

    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    };

    displaySearch(){
        this.searchContainerContent.innerHTML = searchTempalate;
    };

    displayCards(data){
        this.viewContent.innerHTML = "";
        if(data == undefined || data.length == 0){
            this.viewContent.innerHTML += `<div>No content to Load</div>`;
        }else{
            data.map((element, index) => {
                const htmlElement = content(element);
                this.viewContent.innerHTML += htmlElement;
                const id = `status` + element.id;
                const status = element.status
                this.changeStatusColor(id, status);
            });
        }
    };

    changeStatusColor(id, status){
        const changeClass = document.getElementById(id);  
        if(status == "Alive"){
            changeClass.className = "statusCircleAlive";
        } else if(status == "Dead"){
            changeClass.className = "statusCircleDead";
        }
    };


    displayPagination(totalPages, page, name){
        paginationBody(Number(totalPages), Number(page), name);
    };
};


export default MainView;