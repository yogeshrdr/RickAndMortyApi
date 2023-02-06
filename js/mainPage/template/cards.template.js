const content = (element)  => `

    <a href=${"?id=" + element.id} class="card">
        <img src=${element.image} alt="cardImage">
        <div class="cardText">
            <h1>${element.name}</h1>
            <div class="cardStatus">
                <div id=${`status` + element.id} class="statusCircle"></div>
                <div class="statusTitle">${element.status} - ${element.species}</div>     
            </div>
            <h2>Location</h2>
            <p>${element.location.name}</p>
            <h2>Gender</h2>
            <p>${element.gender}</p>
        </div>
    </a>
               
`;

export default content;