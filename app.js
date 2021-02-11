const apiKey = '48e4a7bd866f1f754f5f9acdc2959b9d';
const apiBase = 'http://api.openweathermap.org/data/2.5/weather';

// http://api.openweathermap.org/data/2.5/find?q=London&appid=48e4a7bd866f1f754f5f9acdc2959b9d

const getWeatherData = location => {
    const url = `${apiBase}?q=${location}&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}



// const searchBtn = document.getElementById('search_button');
// searchBtn.addEventListener('click', () => {
//     const inputCity = document.getElementById('city').value;
//     getWeatherData(inputCity)
// })

// const updateUI = data => {
//     document.getElementById('show_city').innerText = data.name || "Unknown Location!";
//     document.getElementById('show_temperature').innerText = data.main.temp;
//     document.getElementById('weather_status').innerText = data.weather[0].main;
//     document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//     document.getElementById('city').value = "";
// }

// getWeatherData('Dhaka');