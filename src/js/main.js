import {shuffle} from 'fast-shuffle';

import data from "./data.json";
import PokemonCard from "./components/PokemonCard";

// Dom selection
const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

// render
function renderPokemons(list){
    // empty previous content
    pokemonRow.innerHTML="";

// using for loop

    // for(let obj of list){
    //     const { name,image,description,link } =obj;
    //     const pokemon = PokemonCard(name,image,description,link);
    //     pokemonRow.appendChild(pokemon);
    // }


    // using for each
    list.forEach((pokemonObj) => {
        const { name,image,description,link } = pokemonObj;
     const pokemon = PokemonCard(name,image,description,link);
       pokemonRow.appendChild(pokemon);
    });

}

// renderPokemons(shuffle(data));


// filter functionality
inputEl.addEventListener("input",(e) => {
    const CurrentInput = e.target.value.toLowerCase().trim();
    console.log(CurrentInput, data);

    const filterPokemons = data.filter((obj) =>
        obj.name.toLowerCase().includes(CurrentInput)
);


// fallback card  (other words)
if(!filterPokemons.length){
    renderPokemons([
        {
            name:"Not found",
            image:"https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
            description:"Try another one..",
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


// initial rewndering
renderPokemons(shuffle(data));