//Page on load automatically loads current weather data for chennai
addEventListener("load", (searchWeather()))
function searchWeather() {
  let searchValue = document.querySelector(".searchBar").value
  //Fetching Open weather API Data
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&APPID=bacc448b60c32248902ca62e45619210&units=metric"
  )
    //Getting Weather API JSON File as response
    .then(function (response) {
      return response.json();
    })
    //Getting Data inside the JSON File
    .then(function (data) {
      console.log(data);
      document.querySelector(".city").innerText = "Weather in " + data.name;
      //Main Details
      document.querySelector(".temp").innerText = data.main.temp + "\u00B0C";
      document.querySelector(".description").innerText = data.weather[0].description
      document.querySelector(".humidity").innerText = "Humidity: " + data.main.humidity + "%"
      document.querySelector(".feelsLike").innerText = "Feels like: " + data.main.feels_like + "\u00B0C";
      //weather Icon
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
      //More Details
      document.querySelector(".pressure").innerText = data.main.pressure + " hPa";
      document.querySelector(".visibility").innerText = (data.visibility) / 1000 + " km"
      document.querySelector(".minTemp").innerText = data.main.temp_min + " \u00B0C"
      document.querySelector(".maxTemp").innerText = data.main.temp_min + " \u00B0C"
      document.querySelector(".windSpeed").innerText = data.wind.speed + " m/s"
      document.querySelector(".windDegree").innerText = data.wind.deg + ("\u00B0")
      document.querySelector(".latitude").innerText = data.coord.lat + " \u00B0N"
      document.querySelector(".longitude").innerText = data.coord.lon + " \u00B0E"
      //Dynamic Background city Image
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + searchValue + ")'"
    })
    //If API data is not found for the City entered.
    .catch(function () {
      alert("Please enter a valid City.  " + searchValue + " is not a valid City");
    });
}
//Event Listener for Enter key to act as submit
addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".searchButton").click();
  }
});