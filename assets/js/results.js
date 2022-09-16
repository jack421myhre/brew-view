// Initialize all div with carousel class
document.addEventListener("DOMContentLoaded", function () {
    let dataFromLocalStorage =
        JSON.parse(localStorage.getItem("breweryList")) || [];

    var carousels = bulmaCarousel.attach(".carousel");
    let weatherBox = document.querySelector("#weatherList");
    let weatherBtn = document.querySelector("#weatherBtn");
    let modalWindow = document.querySelector(".modal");

    // Loop on each carousel initialized
    for (var i = 0; i < carousels.length; i++) {
        // Add listener to  event
        carousels[i].on("before:show", (state) => {
            console.log(state);
        });
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector("#my-element");
    if (element && element.bulmaCarousel) {
        // bulmaCarousel instance is available as element.bulmaCarousel
        element.bulmaCarousel.on("before-show", function (state) {
            console.log(state);
        });
    }

    //WEATHER CODE

    weatherBtn.addEventListener("click", () => {
        modalWindow.classList.add("is-active");
        getWeather();
    });

    function getWeather() {
        // Placeholder until user input is available
        let apiKey = "&appid=d34f0b45996f55d571b6eceb335266c3";
        let city = dataFromLocalStorage[0].city || "Chicago";
        let queryUrl =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=imperial" +
            apiKey;
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
                iconImg.setAttribute(
                    "src",
                    "https://openweathermap.org/img/wn/" + icon + "@2x.png"
                );
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

    // --------------------------

    // function createListEl() {
    //     for (let i = 0; i < 3; i++) {
    //         let infoList = document.getElementById(`infoList${i}`);
    //         createCard();
    //     }
    // }
    /**
 @param {array} dataFromLocalStorage - 
 *  
 [{address :"6820 Bourgeois Rd"
 city: "Houston"
 name: "11 Below Brewing Company"
 phone:"2814442337"
 type: "micro"
 website: "http://www.11belowbrewing.com"}]
 */
    function renderSingleCard(singleBreweryData, index) {
        if (dataFromLocalStorage === []) {
            document.getElementById(
                "carousel-demo"
            ).innerHTML = `<h3>There be no data here... the front line is everywhere</h3>`;
            // return `<h3>There be no data here... the front line is everywhere</h3>`;
            return;
        }
        let addressHtml = function () {
            if (singleBreweryData.address === null) {
                return `<li>Address: N/A</li>`;
            } else {
                return `<li>Address: ${singleBreweryData.address}</li>`;
            }
        };
        let startHtml = `<div class="item-${index}" id="my-element-${index}">
	<img src="./assets/images/beer.png" title="beer icons" Beer icons created by Freepik - Flaticon></img>
	<ul id="infoList0">
	<li>Name: ${singleBreweryData.name}</li>
	<li>City: ${singleBreweryData.city}</li>
	${addressHtml()}
	`;
        let endHtml = `
	</ul>
	<!-- Slide Content -->
	</div>`;
        let allHtml = startHtml + endHtml;
        return allHtml;
        // ${
        //     typeof singleBreweryData.address === "string" && `<li>${singleBreweryData.address}</li>`
        // }
    }
    function createCard(dataFromLocalStorage) {
        let html = "";
        for (let i = 0; i < 3 && i < dataFromLocalStorage.length; i++) {
            let newCardHtml = renderSingleCard(dataFromLocalStorage[i], i);
            html += newCardHtml;
        }
        document.getElementById("carousel-demo").innerHTML = html;
        // let brewName, brewType, brewCity, brewAddress, phone, website;
        // let listElements = [
        //     "brewName",
        //     "type",
        //     "city",
        //     "address",
        //     "phone",
        //     "website",
        // ];
        // for (let i = 0; i < listElements.length; i++) {
        //     let listEl = document.createElement("li");
        //     listEl.setAttribute("id", listElements[i]);
        //     infoList.appendChild(listEl);
        //     // createListEl();
        // }

        // for (let i = 0; i < breweries.length; i++) {
        //     brewName = document.getElementById("brewName");
        //     brewType = document.getElementById("type");
        //     brewCity = document.getElementById("city");
        //     brewAddress = document.getElementById("address");
        //     phone = document.getElementById("phone");
        //     website = document.getElementById("website");
        //     displayInfo();
        // createCard();
    }
    createCard(dataFromLocalStorage);

    function displayInfo() {
        brewName.textContent = `Name: ${breweries[i].name}`;
        brewType.textContent = `Type: ${breweries[i].type}`;
        brewCity.textContent = `City: ${breweries[i].city}`;
        brewAddress.textContent = `Address: ${breweries[i].address}`;
        phone.textContent = `Phone: ${breweries[i].phone}`;
        website.textContent = `Website: ${breweries[i].website}`;

        if (breweries[i].address === null) {
            brewAddress.textContent = "Address: N/A";
        }

        if (breweries[i].phone === null) {
            phone.textContent = "Phone: N/A";
        }

        if (breweries[i].website === null) {
            website.textContent = "Website: N/A";
        }
    }
});
