var typesUrl = "https://pokeapi.co/api/v2/type/";
var imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png";
var categories = [];

var pokemonArr;

function pokemonCardComponent(name, type, imageUrl) {
  var pokemonName = `<div><h2>${name}</h2></div><div><h4>${type}</h4></div>`;
  var divEl = document.createElement("div");
  var cardFooterDiv = document.createElement("div");
  var imageDiv = document.createElement("div");
  var imgEl = document.createElement("img");

  imageDiv.setAttribute("id", "pokeimage");
  imgEl.setAttribute("src", imageUrl);

  imageDiv.append(imgEl);

  cardFooterDiv.setAttribute("id", "card-footer");
  cardFooterDiv.innerHTML = pokemonName;

  divEl.setAttribute("id", "card");
  divEl.append(imageDiv);
  divEl.append(cardFooterDiv);

  document.getElementById("cards").append(divEl);
}

function renderPokeCards() {
  pokemonArr.forEach((pokemonArr) => {
    var { name, type, imageUrl } = pokemonArr.pokemon;

    pokemonCardComponent(name, type, imageUrl);
  });
}
function render() {}
var results;

// renders the types from the categories array
function renderTypes() {
  var selectEl = document.querySelector("select");
  results.forEach((obj) => {
    var options = document.createElement("option");

    options.setAttribute("value", obj.name);
    options.innerHTML = obj.name;

    selectEl.append(options);
  });
}

// fetches the types and pushes it into cateries array
async function getCategories() {
  const res = await fetch(typesUrl + "?limit=21");
  res.json().then((data) => {
    results = data.results;
    renderTypes();
  });
  console.log(results);
}
// fetches the pokemon according to the type selected
async function fetchPokemonArr(count, category) {
  var url = typesUrl + category + "/?limit=" + count;
  const res = await fetch(url);
  res.json().then((data) => {
    pokemonArr = data.pokemon;
    handleGlobalPokemonArr();
  });
}
function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
// handles the submit button
function searchPokemonBasedOnTypes() {
  var count = document.getElementById("quantity").value;
  var category = document.getElementById("typePoke").value;
  count && category
    ? fetchPokemonArr(count, category)
    : console.log(count + category);
}

function handleGlobalPokemonArr() {
  var max = pokemonArr.length;
  var tempPokeArr = [];
  var count = document.getElementById("quantity").value;
  for (i = 0; i < count; i++) {
    var id = randomInt(max);
    tempPokeArr.push(pokemonArr[id]);
  }
  pokemonArr = tempPokeArr;
  tempPokeArr = [];
  fetchPokemonData();
}

// var btnSearch = document
//   .querySelector("button")
//   ?.addEventListener("click", searchPokemonBasedOnTypes);

function fetchPokemonData() {
  var tempPokeArr = [];
  pokemonArr.forEach(async (element) => {
    var { name, url } = element.pokemon;
    var pokeObj = element.pokemon;
    var reg = /\d+(?=\/?$)/g;

    var category = document.getElementById("typePoke").value;
    console.log(url);
    var id = url.match(reg);

    var imageUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
      id +
      ".png";
    pokeObj["imageUrl"] = imageUrl;
    pokeObj["type"] = category;

    // TODO: future add more pokemon details
    // var res = await fetch(url);
    // res.json().then((data) => {
    //   console.log(data);
    // });
  });
  renderPokeCards();
}
window.addEventListener("load", () => {
  getCategories();
});
window.addEventListener("DOMContentLoaded", () => {
  var btn = document.querySelector("button");
  btn.addEventListener("click", searchPokemonBasedOnTypes);
});

window.addEventListener("input", () => {
  var btn = document.querySelector("button");

  var count = document.getElementById("quantity").value;
  var category = document.getElementById("typePoke").value;

  count <= 20 && count > 0 && category
    ? (btn.disabled = false)
    : (btn.disabled = true);
});

// document.addEventListener("DOMContentLoaded", renderTypes());
