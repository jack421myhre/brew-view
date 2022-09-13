let breweryUrl = "https://api.openbrewerydb.org/breweries";

function getBreweries(breweryUrl) {
    fetch(breweryUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}

getBreweries(breweryUrl);
