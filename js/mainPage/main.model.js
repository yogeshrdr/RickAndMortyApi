class MainModel{
    constructor(page, name){
        this.cards = [];
        this.info = {};
        this.search = "";
        this.page = page;
        this.name = name;
        this.totalPages = 0;
    };

    changeData(data, search){
        this.cards = data.results;
        this.info = data.info;
        this.search = search;
        this.totalPages = data.info.pages;
    };
};

export default MainModel;