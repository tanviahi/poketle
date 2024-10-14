import data from "./data.json";

// Dom selection
const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");


// iterate pokeman data

for (let obj of data){
    const { name,image,description } =obj;

    // step:1   create para
    const paragraph = document.createElement("p");
    // step 2: content of paragraph
    paragraph.textContent = name;
    // step 3: paragraph add into pokemon
    pokemonRow.appendChild(pokemonCard(name,image,description));
}

function pokemonCard(name,image,description){
    const div = document.createElement("div");
    
    div.classList.add("col");
    div.innerHTML=`
    <div class="card">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
    <p class="card-text">${description}</p>
    </div>
  </div>
    `;

    return div;

}
 
// add keyboard functionality
document.addEventListener("keyup", (input) => {
    if (input.key === "/"){ 
    inputEl.focus();
    }
});


