import API  from '../../api/api.js';

class MainController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      // this.handleCard();
      this.handleSearch();
      this.handlePagination();
    };
  
    handleCard = async() => {
        const data = await API.getData();
        this.model.changeData(data, "");
        console.log(data);
        this.view.displayCards(data.results);
        this.view.displayPagination(data.info.pages, 1, "");
    };

    handleSearch  = () => {
      this.view.searchContent.addEventListener("keyup",() => {
          let timeOut;
          clearTimeout(timeOut);
          
          timeOut = setTimeout(async() => {
            const data = await API.getDataByName(this.view.searchContent.value);
            this.model.changeData(data, this.view.searchContent.value);
            this.view.displayCards(data.results);
            this.view.displayPagination(data.info.pages, 1, this.view.searchContent.value);
          }, 2000);
      });
    };

    handlePagination = async() => {
        var page = this.model.page;
        var name = this.model.name;
        if(page && name){
            const data = await API.getDataByPageandName(page, name);
            this.model.changeData(data, name);
            this.view.searchContent.value = name;
            this.view.displayCards(data.results);
            this.view.displayPagination(data.info.pages, page, name);
            console.log(1);
        }
        else if(page){
            const data = await API.getDataByPage(page);
            this.model.changeData(data, "");
            this.view.displayCards(data.results);
            this.view.displayPagination(data.info.pages, page, "");
            console.log(2);
        }else if(name){
            const data = await API.getDataByName(name);
            this.model.changeData(data, name);
            this.view.searchContent.value = name;
            this.view.displayCards(data.results);
            this.view.displayPagination(data.info.pages, 1, name);
            console.log(3);
        }else{
          this.handleCard();
        }
    }
}

export default MainController;