const key = 'api-key';


const getCity = async (city) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const q = `?apikey=${key}&q=${city}`;

    const response  = await fetch(baseURL + q);
    const data = await response.json();

    return data[0];
};

const getWeather = async (cityKey) => {
    const baseURL = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
    const q = `?apikey=${key}`;

    const response = await fetch(baseURL + q);
    const data = await response.json();
    return data[0];
};
