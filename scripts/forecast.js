class Forecast {
    constructor() {
        this.key = 'iJ7QXselRADr5bbwV4WnoYYhrfD11dFq'; 
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherURI = `http://dataservice.accuweather.com/currentconditions/v1`;
    }

    async getCity(city) {

        const q = `?apikey=${this.key}&q=${city}`;
        const response  = await fetch(this.cityURI + q);
        const data = await response.json();
        return data[0];

    }

    async getWeather(cityKey) {
        const q = `/${cityKey}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI + q);
        const data = await response.json();
        return data[0];
    }

    async updateCity(city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
    
        return { cityDetails, weather }
    };
}
