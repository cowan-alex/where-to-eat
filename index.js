var button = $('button');
var result =$('.result');

var addNewButton = $('.addnew');


var restaurants = ["Annapurna", "Taco Bell", "Gyros", "Aviv Hummus Bar", "Plum", "Kati Thai", "Araya's Place", "No Bones Beach Club", "Highline", "El Borracho", "Dino's Pizza"];

button.on("click", randomizeResult)

function randomizeResult() {
  var randomDecimal = Math.random()* restaurants.length;
  var randomWholeNumber = Math.floor(randomDecimal);
  var restaurant = restaurants[randomWholeNumber];
  // console.log(restaurant);
  result.text(`You should eat at ${restaurant}!`)
}


addNewButton.on("click", addRestaurant)

function addRestaurant() {
  var newRestaurant = $('input').val();
  restaurants.push(newRestaurant);
  console.log(restaurants);
  $('input').val("");
}
