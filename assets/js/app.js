// -----------------------------------------
// ------------- DOM ELEMENTS --------------
// -----------------------------------------
let searchBtn = document.getElementById("searchBtn");
let modalWindow = document.querySelector(".modal");
let modalClose = document.querySelector(".modal-close");
let modalSearch = document.querySelector(".modal-search");

let searchCity = document.getElementById("city");
let searchPostal = document.getElementById("postalCode");
let searchName = document.getElementById("byName");
let searchForm = document.querySelector(".searchForm");

// -----------------------------------------
// -------- API CALL AND FUNCTIONS ---------
// -----------------------------------------
function getBreweries(breweryUrl) {
    console.log(breweryUrl);
    fetch(breweryUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            storedSearch(data);
        });
}

// Sets the local storage with recent user search.
function storedSearch(data) {
    let breweryList = [];
    for (let i = 0; i < data.length; i++) {
        let searchData = {
            name: data[i].name,
            type: data[i].brewery_type,
            city: data[i].city,
            address: data[i].street,
            phone: data[i].phone,
            website: data[i].website_url,
        };
        breweryList.push(searchData);
    }
    localStorage.setItem("breweryList", JSON.stringify(breweryList));
    window.location.href = "results.html";
}

// -----------------------------------------
// ----------- EVENT LISTENERS -------------
// -----------------------------------------
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let breweryUrl = "";
    let userCity = searchCity.value;
    let userPostal = searchPostal.value;

    // Add this function for the if block
    // checkSearch();
    if (userCity && !userPostal) {
        breweryUrl =
            "https://api.openbrewerydb.org/breweries?by_city=" +
            userCity +
            "&per_page=3";
    } else if (userPostal && !userCity) {
        breweryUrl =
            "https://api.openbrewerydb.org/breweries?by_postal=" +
            userPostal +
            "&per_page=3";
    } else {
        document.getElementById("errorMessage").textContent =
            "Please use only ONE field to search.";
    }
    console.log(breweryUrl);
    getBreweries(breweryUrl);
});

searchBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modalWindow.classList.add("is-active");
});

modalClose.addEventListener("click", () => {
    modalWindow.classList.remove("is-active");
});
