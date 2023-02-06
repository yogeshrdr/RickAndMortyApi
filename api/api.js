export default{
    async getData(){
        const response = await fetch("https://rickandmortyapi.com/api/character");
        return response.json();
    },
    async getDataById(id){
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        return response.json();
    },
    async getDataByName(name){
        const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`);
        return response.json();
    },
    async getDataByPage(page){
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        return response.json();
    },
    async getDataByPageandName(page, name){
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${name}`);
        return response.json();
    }
};