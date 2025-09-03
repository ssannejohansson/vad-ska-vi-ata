

// Shuffle wordList and sort it in a random order
let shuffledFoodList = shuffleArray(foodList); // Shuffles the wordList array when calling the function below and stores it in shuffledWordList
let currentFoodIndex = 0; // Sets the starting index for the current word to 0

/**
 * Shuffles the array using the Fisher-Yates-like method with random sorting.
 */
function shuffleArray(arr) { 
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

$("#generate-food").on("click", randomDish);


let dishDisplayContent = '<div class="container d-flex flex-column justify-content-center align-items-center text-center" id="dish-container">' + 
'<h1 class="mb-5" id="dish"></h1>' +
'<p class="m-auto">Vill du ha lite ny inspiration?</p>' +
'<a class="mt-2 btn custom-btn-link mb-5" id="link" target="_blank">Testa detta receptet!</a>' +
'<p class="m-auto">Inte sugen?</p>' +
'<button class="btn custom-btn mt-2" id="shuffle">Generera igen</button>' +
'</div>';


function randomDish() {
if (currentFoodIndex >= shuffledFoodList.length) { 
    shuffledFoodList = shuffleArray(foodList);
    currentFoodIndex = 0; 
  }

  let randomDish = shuffledFoodList[currentFoodIndex++]; 
  dish = randomDish.dish; 
  link = randomDish.link; 
  img = randomDish.img;



$("#dish").text(dish);
$("a").attr("href", link);
$("img").attr("src", img);
$("#shuffle").on("click", dishDisplay);
}

function dishDisplay() {
    $(".container").children().remove();
   $("#glass-container").append(dishDisplayContent);
   randomDish();
}

