const content = (data)  => `
<div class="details">
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
</div>
`;

export default content;
