import data from "./data.json";
import PokemonCard from "./components/PokemonCard";

// Dom selection
const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

// render
function renderPokemons(list){
    // empty previous content
    pokemonRow.innerHTML="";
    for(let obj of list){
        const { name,image,description,link } =obj;
        const pokemon = PokemonCard(name,image,description,link);
        pokemonRow.appendChild(pokemon);
    }
}

renderPokemons(data);


// filter functionality
inputEl.addEventListener("input",(e) => {
    const CurrentInput = e.target.value.toLowerCase().trim();
    console.log(CurrentInput, data);

    const filterPokemons = data.filter((obj) =>
        obj.name.toLowerCase().includes(CurrentInput)
);
if(filterPokemons.length === 0){
    renderPokemons([
        {
            name:"Not found",
            image:"",
            description:"Dusra type kro",
            link:"",

    },
]);

return;
}

renderPokemons(filterPokemons);
});


// add keyboard functionality
document.addEventListener("keyup", (input) => {
    if (input.key === "/"){ 
        // console.log(`slash pressed`);
    inputEl.focus();
    }
});


