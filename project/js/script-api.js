function movetonext() {
  alert("hei");
}

async function get() {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=50b6e62635324316aec8921886e23695&number=40"
  );
  const results = await response.json();
  console.log(results);
  console.log(results.number);
  for (i = 0; i < results.number; i++) {
    if (!results.results[i]) {
      continue;
    }

    const resultsContainer = document.querySelector("#api-container");
    resultsContainer.innerHTML += `<div class="card" onclick="movetonext()">
     <h1 class="api-title">${results.results[i].title}</h1>
     <img src="${results.results[i].image}" alt="${results.results[i].name}" />
    
 </div>`;
  }
}
get();
