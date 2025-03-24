async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "20c03db60e444a13bdb150247252403"; // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const weatherInfo = document.getElementById("weather-info");
    const errorMessage = document.getElementById("error-message");

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.error) {
            weatherInfo.classList.add("hidden");
            errorMessage.classList.remove("hidden");
            errorMessage.innerText = "City not found or invalid API key!";
            return;
        }

        errorMessage.classList.add("hidden");
        weatherInfo.classList.remove("hidden");

        document.getElementById("city-name").innerText = `${data.location.name}, ${data.location.country}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
        document.getElementById("description").innerText = `Condition: ${data.current.condition.text}`;
        document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
        document.getElementById("wind").innerText = `Wind Speed: ${data.current.wind_kph} kph`;
    } catch (error) {
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
        errorMessage.innerText = "Network error. Try again!";
    }
}
