import data from "./data.json";

// for (let object of data){
// console.log(object.name);
// }
 
// for (let name of data){
//     console.log(data);
//     }

const inputEl = document.querySelector("#floatingInputGroup1")
console.log(inputEl)

document.addEventListener("keyup", (input) => {
    if (input.key === "/"){ 
    inputEl.focus();
    }
});

