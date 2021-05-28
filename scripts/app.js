const locationForm = document.querySelector('.location');
const details = document.querySelector('.details');
const card = document.querySelector('.card');
const icon = document.querySelector('img.weather-icon');
const time = document.querySelector('img.time');
console.log(icon);

icon.setAttribute('src','/img/icons/1.svg');

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather }
};

const updateUI = (data) => {
    const {cityDetails, weather} = data;
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 mb-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    let timesrc = weather.IsDayTime ? '/img/day.svg' : '/img/night.svg';
    let iconsrc = '/img/icons/'+(weather.WeatherIcon)+'.svg';
    

    icon.setAttribute('src',iconsrc);
    time.setAttribute('src',timesrc);
    
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};
locationForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get city value
    const city = locationForm.city.value.trim();

    // Reset Form
    locationForm.reset();

    // Update City
    updateCity(city)
        .then(data => {
            console.log(data);
            updateUI(data);
        })
        .catch(error => console.log(error))
    
});
