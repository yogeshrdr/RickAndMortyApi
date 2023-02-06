class Router{
    constructor(app){
        this.app = app;
        this.routes = [];
        this.hashChange = this.hashChange.bind(this);
        window.addEventListener('hashchange', this.hashChange);
        window.addEventListener('DOMContentLoaded', this.hashChange);
    };

    addRoute(name, path){
        this.routes.push({name, path});
    };

    hashChange(){
        const {hash} = window.location;
        const id = this.getUrlParams("id");
        const page = this.getUrlParams("page");
        const name = this.getUrlParams("name");

        if(id!==null){
            this.app.detailsPage(id);
        }
        else{
            this.app.indexPage(page, name);
        }
    };

    getUrlParams(param){
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        return url.searchParams.get(param);
    }
};

export default Router;