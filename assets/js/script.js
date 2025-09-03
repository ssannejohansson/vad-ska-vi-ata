

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

$("#shuffle").on("click", randomDish);

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
}

randomDish();

