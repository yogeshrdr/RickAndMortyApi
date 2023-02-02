
const getUrlParams = () => {
    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    return url.searchParams.get("id");
}

window.addEventListener("load", async() => {
    const id = getUrlParams();
    
    if(id!==undefined && id !==null && id!==""){
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        const res = await fetch(url);
        var data = await res.json();
        deatilsBody(data);
    }
});


// function to create details card
const deatilsBody = (data) => { 
    const container = document.getElementById('details');
    container.innerHTML = "";

    if(data!==undefined && data!==null){
            const card = document.createElement('div');
            card.classList = 'card-body';

            const content  = `
                <img src=${data.image} alt="detailsImage">
                <div class="detailsText">
                <h1>ID : ${data.id}</h1>
                <h2>Name : ${data.name}</h2>
                <div>
                    <div></div>
                    <h3>Status : ${data.status}</h3>
                </div>
                <h4>Type : ${data.type}</h4>
                <h4>Gender: ${data.gender}</h4>
                <h4>Origin: ${data.origin.name}</h4>
                <h4>location: ${data.location.name}</h4>
            `;

            container.innerHTML += content;
    }
}



