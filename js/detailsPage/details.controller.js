import API  from '../../api/api.js';

class DetailsController {
    constructor(model, view, id) {
      this.model = model;
      this.view = view;
      this.id = id;
      this.handleCard();
    };
  
    handleCard = async() => {
        const data = await API.getCharactersById(this.id);
        this.model.changeData(data);
        this.view.displayCard(this.model.card);
    };
}

export default DetailsController ;