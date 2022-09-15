// Initialize all div with carousel class
var carousels = bulmaCarousel.attach('.carousel');

// Loop on each carousel initialized
for(var i = 0; i < carousels.length; i++) {
	// Add listener to  event
	carousels[i].on('before:show', state => {
		console.log(state);
	});
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('before-show', function(state) {
		console.log(state);
	});
}


//WEATHER CODE
// Placeholder until user input is available
let apiKey = "&appid=d34f0b45996f55d571b6eceb335266c3";
let city = "Houston"; //document.querySelector("#city");
let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial" + apiKey;
let weatherBtn = document.querySelector("#weatherBtn");
let modalWindow = document.querySelector(".modal");

weatherBtn.addEventListener("click", () => {
	    modalWindow.classList.add("is-active");
		getWeather(queryUrl);
});
function getWeather(queryUrl) {
    fetch(queryUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // let zip = data[0].postal_code;
            // console.log(zip);
        });
}

let closeBtn = document.querySelector("#close-button");
closeBtn.addEventListener("click", () => {
	modalWindow.classList.remove("is-active");
});



// TESTING
// event listener
// searchBtn.addEventListener("click", () => {
//     modalWindow.classList.add("is-active");
// });
