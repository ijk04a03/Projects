let API_KEY = "Z9HGH2FWKGN6LVVF7339EB98H";
let headLink = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
let userlocation = "";
let unitGrp = ["us", "uk"];
let unitChoice = 0;


const submitBtn = document.querySelector("#submit-btn");
const locationInput = document.querySelector("#location");


submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    userlocation = locationInput.value.trim();
    const locationName = document.querySelector("#location-name");
    locationName.textContent = userlocation;

    await WeatherUpdate();
})

const tempUnitBtn = document.querySelector("#unit-btn");

tempUnitBtn.addEventListener("click", () => {
    unitChoice = (unitChoice == 1) ? 0 : 1;
    if (userlocation) {
        WeatherUpdate();
    }
    tempUnitBtn.textContent = (unitChoice == 0) ? " Fahrenheit" : " Celsius";
})

async function WeatherUpdate() {
    let otherpart = `unitGroup=${unitGrp[unitChoice]}` + `&include=current,hours,days` + `&key=${API_KEY}` + `&contentType=json`;
    let wholeLink = `${headLink}${userlocation}?${otherpart}`;
    const currentWeather = document.querySelector("#current-weather");
    const currentTemp = document.querySelector("#current-temperature");
    try {
        const resource = await fetch(wholeLink);
        const data = await resource.json();
        currentWeather.textContent = await data.currentConditions.conditions;
        currentTemp.textContent = await data.currentConditions.temp + `${(unitChoice == 0) ? "°F" : "°C"}`;
    } catch (error) {
        console.error("Failed to fetch weather:", error);
    }



}