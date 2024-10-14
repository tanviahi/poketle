import data from "./data.json";
import PokemonCard from "./components/PokemonCard";

// Dom selection
const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");


// iterate pokeman data

for (let obj of data){
    const { name,image,description,link } =obj;

   
    pokemonRow.appendChild(PokemonCard(name,image,description,link));
}

// function PokemonCard(name,image,description,link){
//     const div = document.createElement("div");
    
//     div.classList.add("col");
//     div.innerHTML=`
//     <div class="card">
//     <img src="${image}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${name}</h5>
//     <p class="card-text">${description}</p>
//     <a href="${link}" class="btn btn-warning" target="_blank">Visit</a>

//     </div>
//   </div>
//     `;

//     return div;

// }
 
// add keyboard functionality
document.addEventListener("keyup", (input) => {
    if (input.key === "/"){ 
    inputEl.focus();
    }
});


