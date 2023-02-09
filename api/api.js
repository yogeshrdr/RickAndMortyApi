const BASE_URL = "https://rickandmortyapi.com/api/character";

export default{
    async getCharacters(){
        return await fetch(BASE_URL)
        .then(response => response.json());
    },
    async getCharactersById(id){
       return await fetch(`${BASE_URL}/${id}`)
       .then(response => response.json());
    },
    async getCharactersByFilter(page, name){
        return await fetch(`${BASE_URL}?page=${page}&name=${name}`)
        .then(response => response.json());
    }
};