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
let city = "Houston"; //JSON.parse(localStorage.getItem("searchCity")) [];
let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial" + apiKey;
let weatherBox = document.querySelector("#weatherList");
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
            // weatherBox.textContent = ""
			let temp = document.getElementById("temp");
			let humidity = document.querySelector("#humidity");
			let wind = document.querySelector("#wind");
			let icon = data.weather[0].icon;
			let iconImg = document.createElement("img");
			// let image = document.querySelector("#image");
			iconImg.setAttribute("src","https://openweathermap.org/img/wn/" + icon + "@2x.png")
			temp.textContent = data.main.temp;
			humidity.textContent = data.main.humidity;
			wind.textContent = data.wind.speed;

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
