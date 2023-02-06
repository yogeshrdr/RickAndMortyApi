
import App from './js/app.js';
import Router from './js/routes/routes.js';


const app = new App("#app");
const router = new Router(app);

router.addRoute('index', '/');










// var search = document.getElementById("search");


// //function to get query parameters
// const getUrlParams = (x) => {
//     var url_string = (window.location.href).toLowerCase();
//     var url = new URL(url_string);
//     return url.searchParams.get(x);
// };


// //when an index.html loads this event will be called
// window.addEventListener("load", async() => {
    
//     var pageId = Number(getUrlParams("pageno"));
//     var filter = getUrlParams("filter");
//     var url = '';

//     if(pageId===undefined && pageId===null && pageId===NaN && pageId===""){
//         url = "https://rickandmortyapi.com/api/character";
//     }
//     else{
//         if(filter!=="" && filter!==undefined && filter!==null){
//             getSearchFilter(filter, pageId);
//         }else{
//             url = `https://rickandmortyapi.com/api/character/?page=${pageId}`;
//         }
//     }
//     const res = await fetch(url);
//     var data = await res.json();

//     paginationBody(data.info.pages, pageId);
//     cardBody(data.results);
// });



// //when we type in search then it is called up
// search.addEventListener("keyup", () => {
//     getSearch(search.value);
// });


// //get search result
// const getSearch = async(value) => {
//     var pageId = Number(getUrlParams("pageno"));
//     if(value.length == 0){
//         const url = "https://rickandmortyapi.com/api/character";
//         const res = await fetch(url);
//         var data = await res.json();
//         paginationBody(data.info.pages, pageId, "");
//         cardBody(data.results);
//     }

//     if(value.length > 3){
//         const url = `https://rickandmortyapi.com/api/character/?name=${value}`;
//         const res = await fetch(url);
//         var data  = await res.json();
//         paginationBody(data.info.pages, pageId, value);
//         cardBody(data.results);
//     }
// };


// //a custom function made on query of filter
// const getSearchFilter = async(filter, pageId) =>{
//     search.value = filter;
//     const url = `https://rickandmortyapi.com/api/character/?page=${pageId}&name=${filter}`;
//     console.log(url);
//     const res = await fetch(url);
//     var data  = await res.json();
//     console.log(data);
//     paginationBody(data.info.pages, pageId, filter);
//     cardBody(data.results);
// };

// //Grid of card are been initialized here and parse the data also;
// const cardBody = (data) => {
//     const container = document.getElementById('cardContainer');
//     container.innerHTML = "";

//     if(data!==undefined && data!==null){
//         data.forEach((element, index)=> {
//             const content  = `

//                 <a href=${"/details.html?id=" + element.id} class="card">
//                     <img src=${element.image} alt="cardImage">
//                     <div class="cardText">
//                         <h1>${element.name}</h1>
//                         <div class="cardStatus">
//                             <div id=${`status` + element.id} class="statusCircle"></div>
//                             <div class="statusTitle">${element.status} - ${element.species}</div>     
//                         </div>
//                         <h2>Location</h2>
//                         <p>${element.location.name}</p>
//                         <h2>Gender</h2>
//                         <p>${element.gender}</p>
//                     </div>
//                 </a>
               
//             `;

            
//             container.innerHTML += content;

//             const id = `status` + element.id;
//             const changeClass = document.getElementById(id);
            
//             if(element.status == "Alive"){
//                 changeClass.className = "statusCircleAlive";
//             } else if(element.status == "Dead"){
//                 changeClass.className = "statusCircleDead";
//             }
//         });
//     }
// }



// //Pagination function where the link and body of pagination is rendered
// const paginationBody = (totalPages, pageId, filter) => {
//     //cases
//     const container = document.getElementById("pagination");
//     container.innerHTML = "";
    
    

//     const contentBody = (ele) => {
//         var content = "";

//         if(filter!==undefined && filter!==null && filter!==""){
//             var pageNum = 1;

//             if(pageId!==undefined && pageId!==null && pageId!==NaN){
//                 pageNum = ele;
//             }

//             content = `
//             <a href=${"/index.html?pageno=" +pageNum  + "&filter="+filter}>
//                 <button class="paginationButton" id=${"page"+pageNum }>${pageNum}</button>
//             </a>
//         `
//         }else{
//             content = `
//                 <a href=${"/index.html?pageno=" +ele}>
//                     <button class="paginationButton" id=${"page"+ele}>${ele}</button>
//                 </a>
//             `
//         }
        
//         container.innerHTML += content;
//         return;
//     };

//     const dotbody = () => {
//         const content = `
//             <button class="paginationButton">...</button>
//         `
//         container.innerHTML += content;
//         return;
//     };

//     const nextPrevButton = (ele, next) =>{
//         const content = `
//         <a href=${"/index.html?pageno=" +ele}>
//             <button class="paginationButton">${next}</button>
//         </a>
//         `
//         container.innerHTML += content;
//         return;
//     };

//     if(totalPages<=5){
//         for(var i=1;i<=totalPages;i++){
//             contentBody(i);
//         }
//     }

//     else if(pageId!==undefined && pageId!==null && pageId>2 && pageId<totalPages-1){
//         nextPrevButton(pageId-1, "prev");
//         contentBody(1);
//         dotbody();
//         contentBody(pageId-1);
//         contentBody(pageId);
//         contentBody(pageId+1);
//         dotbody();
//         contentBody(totalPages);
//         nextPrevButton(pageId+1, "next");
//     }

//     else if(pageId === 1 || pageId === 2){
//         contentBody(1);
//         contentBody(2);
//         contentBody(3);
//         dotbody();
//         contentBody(totalPages-1);
//         contentBody(totalPages);
//     }

//     else if(pageId === totalPages-1 || pageId === totalPages){
//         contentBody(1);
//         contentBody(2);
//         dotbody();
//         contentBody(totalPages-2);
//         contentBody(totalPages-1);
//         contentBody(totalPages);
//     }

//     else{
//         contentBody(1);
//         contentBody(2);
//         contentBody(3);
//         dotbody();
//         contentBody(totalPages-1);
//         contentBody(totalPages);
//     }

//     var id = "";

//     if(pageId!==undefined && pageId!==null && pageId!==NaN){
//         id = "page" + pageId;
//     }else{
//         id = "page" + 1;
//     }

    
//     const changeClass = document.getElementById(id);

//     if(changeClass!==null){
//         changeClass.className = "pageCurrent";
//     }
// };




