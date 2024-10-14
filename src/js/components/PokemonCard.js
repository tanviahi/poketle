// component
export default function (name,image,description,link){
    const div = document.createElement("div");
    
    div.classList.add("col");
    div.innerHTML=`
    <div class="card">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
    <p class="card-text">${description}</p>
    <a href="${link}" class="btn btn-warning" target="_blank">Visit</a>

    </div>
  </div>
    `;

    return div;

}