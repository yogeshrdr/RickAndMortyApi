import API  from '../../api/api.js';

class MainController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.handleSearch();
      this.handlePagination();
    };
  
    handleCard = async() => {
        const data = await API.getCharacters();
        this.model.changeData(data, "");
        this.view.displayCards(this.model.cards);
        this.view.displayPagination(data.info.pages, 1, "");
    };

    handleSearch  = () => {
      this.view.searchContent.addEventListener("keyup",() => {
          let timeOut;
          clearTimeout(timeOut);

          timeOut = setTimeout(async() => {
            const data = await API.getCharactersByFilter(1, this.view.searchContent.value);
            this.model.changeData(data, this.view.searchContent.value);
            this.view.displayCards(this.model.cards);
            this.view.displayPagination(data.info.pages, 1, this.view.searchContent.value);
          }, 2000);
      });
    };

    handlePagination = async() => {
        var page = this.model.page;
        var name = this.model.name;
        if(page && name){
            const data = await API.getCharactersByFilter(page, name);
            this.model.changeData(data, name);
            this.view.searchContent.value = name;
            this.view.displayCards(this.model.cards);
            this.view.displayPagination(data.info.pages, page, name);
        }
        else if(page){
            const data = await API.getCharactersByFilter(page,"");
            this.model.changeData(data, "");
            this.view.displayCards(this.model.cards);
            this.view.displayPagination(data.info.pages, page, "");
        }else if(name){
            const data = await API.getCharactersByFilter(1, name);
            this.model.changeData(data, name);
            this.view.searchContent.value = name;
            this.view.displayCards(this.model.cards);
            this.view.displayPagination(data.info.pages, 1, name);
        }else{
          this.handleCard();
        }
    }
};

export default MainController;