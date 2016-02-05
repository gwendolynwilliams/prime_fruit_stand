var apple = ['apple', 1];
var orange = ['orange', 1]; 
var banana = ['banana', 1]; 
var grape = ['grape', 1]; 
var userTotalCash = 100;
var newPrice;
var selectedFruit;

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var fruits = [apple, orange, banana, grape];

setInterval(priceChange, 5000);

// jquery document ready listener
$(document).ready(function() {

	$('#apple').append('<button class="apple-button">Buy Apple</button>');
	$('.apple-button').data('fruit', apple);
	$('.apple-button').on('click', buyFruit);

	$('#banana').append('<button class="banana-button">Buy Banana</button>');
	$('.banana-button').data('fruit', banana);
	$('.banana-button').on('click', buyFruit);

	$('#orange').append('<button class="orange-button">Buy Orange</button>');
	$('.orange-button').data('fruit', orange);
	$('.orange-button').on('click', buyFruit);

	$('#grape').append('<button class="grape-button">Buy Grapes</button>');
	$('.grape-button').data('fruit', grape);
	$('.grape-button').on('click', buyFruit);

})

// randomly changing the fruit price
// market price fluctuates up or down 50 cents (between 1 cent and 50 cents) every 15 seconds
function priceChange() {
	for (var i = 0; i < fruits.length; i++) {
		var randomPrice = randomNumber(-50, 50) / 100;
		var currentPrice = fruits[i][1];
		newPrice = randomPrice + currentPrice;
		
		// fruits cannot go below 50 cents or above $9.99
		if (newPrice < .50) {
			newPrice = .50;
		} else if (newPrice > 9.99) {
			newPrice = 9.99;
		}

		// writing the new price to each fruit array
		fruits[i][1] = newPrice;
		
		console.log(fruits[i][0], newPrice);

		// display the fruits' new prices on the DOM
		$('#' + fruits[i][0] + 'Price').children().first().text('$' + (newPrice).toFixed(2));
		$

	}
	
}

function buyFruit() {
	// totalCash minus each fruit's current price
	selectedFruit = $(this).data('fruit');

	if (userTotalCash > 0)	{
		userTotalCash = (userTotalCash - selectedFruit[1]).toFixed(2);
	} else
		alert("I'm sorry, you're broke!");

	//writing the new Available Total Cash to the DOM
	$('#newCash').text(userTotalCash);

	console.log(userTotalCash);

}