const movies = [
{title:"Fast Action", img:"https://picsum.photos/300/200?1"},
{title:"Love Story", img:"https://picsum.photos/300/200?2"},
{title:"Night War", img:"https://picsum.photos/300/200?3"}
];

const tvShows = [
{title:"Money Show", img:"https://picsum.photos/300/200?4"},
{title:"Drama Life", img:"https://picsum.photos/300/200?5"},
{title:"Comedy Time", img:"https://picsum.photos/300/200?6"}
];

function display(content, containerId){
    const container = document.getElementById(containerId);
    if(!container) return;

    content.forEach(item=>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`
        <img src="${item.img}">
        <h3>${item.title}</h3>
        `;
        container.appendChild(card);
    });
}

display(movies,"movieContainer");
display(tvShows,"tvContainer");

function searchFunction(inputId, data, containerId){
    const input = document.getElementById(inputId);
    if(!input) return;

    input.addEventListener("keyup", ()=>{
        const value = input.value.toLowerCase();
        const filtered = data.filter(item =>
            item.title.toLowerCase().includes(value)
        );
        document.getElementById(containerId).innerHTML="";
        display(filtered, containerId);
    });
}

searchFunction("searchMovie", movies, "movieContainer");
searchFunction("searchTV", tvShows, "tvContainer");