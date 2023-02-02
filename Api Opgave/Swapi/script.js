const baseURL = "https://swapi.dev/api";
const content = document.querySelector("#content");
const loader=document.getElementById("loading");
const filter =["created","edited","species","films","starships","vehicles","homeworld","url","characters","residents","planets","people","pilots"];
let MoreInfo=false;

async function createMenu(){
    const menuItems = await getDataFromURL(baseURL);
    console.log(menuItems);
    const navBar= document.querySelector("#nav-bar")
    for(const [k,v] of Object.entries(menuItems)){
        const item =document.createElement("a");
        item.addEventListener("click", menuClick);
        item.className="nav-item";
        item.href= v;
        item.innerText=k;
        navBar.appendChild(item);
    }
    navBar.children[0].click();
}

async function menuClick(e){
    content.clear();
    showLoading();
    e.preventDefault();
    document.querySelector(".active")?.classList.remove("active");
    e.target.classList.add("active");
    const data= await getDataFromURL(e.target.href);
    console.log(data);
    hideLoading();
    showData(data.results);
}

async function showData(dataArray){
    dataArray.forEach(arrayItem => {
        const card = document.createElement("div");
        card.className="card";
        card.addEventListener("click",function(){
            cardClick(card,arrayItem);
        });
        for(const [k,v] of Object.entries(arrayItem)){
                const p = document.createElement("p");
                if(Array.isArray(v)){
                    p.insertAdjacentHTML("beforeend",`${k}: <ul><li> ${v.join("<li>")}<ol>`);
                }else{
                    p.insertAdjacentHTML("beforeend",`${k}: ${v}`);
                }
                if(filter.includes(k)) {
                    p.className="Hidden";
                }else{
                    p.className="Shown";
                }
                card.appendChild(p);

        }
        content.appendChild(card);
    });
}

async function cardClick(card,arrayItem){
    card.clear();
    if(MoreInfo==false){
        for(const [k,v] of Object.entries(arrayItem)){
            const p = document.createElement("p");
            if(Array.isArray(v)){
                p.insertAdjacentHTML("beforeend",`${k}: <ul><li> ${v.join("<li>")}<ol>`);
            }else{
                p.insertAdjacentHTML("beforeend",`${k}: ${v}`);
            }
                p.className="Shown";
            card.appendChild(p);
    }
    MoreInfo=true;
}
    else{
        for(const [k,v] of Object.entries(arrayItem)){
            const p = document.createElement("p");
            if(Array.isArray(v)){
                p.insertAdjacentHTML("beforeend",`${k}: <ul><li> ${v.join("<li>")}<ol>`);
            }else{
                p.insertAdjacentHTML("beforeend",`${k}: ${v}`);
            }
            if(filter.includes(k)) {
                p.className="Hidden";
            }else{
                p.className="Shown";
            }
            card.appendChild(p);
    }
    MoreInfo=false;
}
    }



function showLoading(){
    loader.classList.add("visible");
}

function hideLoading(){
    loader.classList.remove("visible");
}

HTMLDivElement.prototype.clear = function(){
    while(this.firstChild){
        this.removeChild(this.firstChild)
    }
    return this;
};

async function getDataFromURL(url){
    const res=await fetch(url);
    return await res.json();
}

createMenu();