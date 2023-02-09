
import DetailController from "./detailsPage/details.controller.js";
import DetailModel from "./detailsPage/details.model.js";
import DetailView from "./detailsPage/details.view.js";
import MainController from "./mainPage/main.controller.js";
import MainModel from './mainPage/main.model.js';
import MainView from './mainPage/main.view.js';


class App{
    constructor(selector){
        this.appElement = document.querySelector(selector);
    }

    homePage(page, name){
        var model = new MainModel(page, name);
        var view = new MainView("#cardContainer", "#searchNavbar", "#searchInput");
        var controller = new MainController(model, view);
    }

    detailsPage(id){
        var model = new DetailModel;
        var view = new DetailView ("#detailsContainter", "#detailsNavbar");
        var controller =  new DetailController(model, view, id);
    }
};


export default App;