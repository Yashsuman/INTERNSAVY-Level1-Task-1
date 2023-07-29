function getWeather() {
    const locationInput = document.getElementById("locationInput");
    const location = locationInput.value;
    if (!location) {
      alert("Please enter a location.");
      return;
    }
  
    const apiKey = "29be463ebd2a770e6f98d65a563bb271"; // You need to replace this with a valid API key from a weather service provider.
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Description: ${data.weather[0].description}</p>
          <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
      })
      .catch((error) => {
        console.log("Error fetching weather data:", error);
        alert("Error fetching weather data. Please try again later.");
      });
  }
  