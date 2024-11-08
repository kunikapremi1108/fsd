const apiKey = "d2cd792adb7185e90d8fff9972bb65ce";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById("weatherResult");
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;

            weatherResult.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${temperature} °C</p>
                <p>Description: ${weatherDescription}</p>
            `;
        })
        .catch(error => {
            alert(error.message);
        });
}
