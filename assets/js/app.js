// Placeholder until user input is available
let city = "Houston";
let searchBtn = document.querySelector("#searchBtn");
let modalWindow = document.querySelector(".modal");

let breweryUrl = "https://api.openbrewerydb.org/breweries?by_city=" + city;
function getBreweries(breweryUrl) {
    fetch(breweryUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let zip = data[0].postal_code;
            console.log(zip);
        });
}

getBreweries(breweryUrl);

// TESTING
// event listener
// searchBtn.addEventListener("click", () => {
//     modalWindow.classList.add("is-active");
// });
