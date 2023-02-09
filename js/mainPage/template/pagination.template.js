
const paginationBody = (totalPages, pageId, filter) => {
    const container = document.getElementById("pagination");
    container.innerHTML = "";
    
    const contentBody = (ele) => {
        var content = "";

        if(filter!==undefined && filter!==null && filter!==""){
            var pageNum = 1;

            if(pageId!==undefined && pageId!==null && pageId!==NaN){
                pageNum = ele;
            }

            content = `
            <a href=${"/index.html?page=" +pageNum  + "&name="+filter}>
                <button class="paginationButton" id=${"page"+pageNum }>${pageNum}</button>
            </a>
        `
        }else{
            content = `
                <a href=${"/index.html?page=" +ele}>
                    <button class="paginationButton" id=${"page"+ele}>${ele}</button>
                </a>
            `
        }
        
        container.innerHTML += content;
        return;
    };


    const dotbody = () => {
        const content = `
            <button class="paginationButton">...</button>
        `
        container.innerHTML += content;
        return;
    };

    const nextPrevButton = (ele, next) =>{
        const content = `
        <a href=${"/index.html?page=" +ele}>
            <button class="paginationButton">${next}</button>
        </a>
        `
        container.innerHTML += content;
        return;
    };

    if(totalPages<=5){
        for(var i=1;i<=totalPages;i++){
            contentBody(i);
        }
    }

    else if(pageId!==undefined && pageId!==null && pageId>2 && pageId<totalPages-1){
        nextPrevButton(pageId-1, "prev");
        contentBody(1);
        dotbody();
        contentBody(pageId-1);
        contentBody(pageId);
        contentBody(pageId+1);
        dotbody();
        contentBody(totalPages);
        nextPrevButton(pageId+1, "next");
    }

    else if(pageId === 1 || pageId === 2){
        contentBody(1);
        contentBody(2);
        contentBody(3);
        dotbody();
        contentBody(totalPages-1);
        contentBody(totalPages);
    }

    else if(pageId === totalPages-1 || pageId === totalPages){
        contentBody(1);
        contentBody(2);
        dotbody();
        contentBody(totalPages-2);
        contentBody(totalPages-1);
        contentBody(totalPages);
    }

    else{
        contentBody(1);
        contentBody(2);
        contentBody(3);
        dotbody();
        contentBody(totalPages-1);
        contentBody(totalPages);
    }

    var id = "";

    if(pageId!==undefined && pageId!==null && pageId!==NaN){
        id = "page" + pageId;
    }else{
        id = "page" + 1;
    }

    
    const changeClass = document.getElementById(id);

    if(changeClass!==null){
        changeClass.className = "pageCurrent";
    }
};


export default paginationBody;