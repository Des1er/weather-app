class Forcast{
    constructor(){
        this.key = '6Y6hiUV4uNM3UfGp8iJccvvJ7FhMU0gA';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async update(city){
        const cityDet = await this.getCity(city);
        const weather = await this.getWeth(cityDet.Key);
        
        return { cityDet, weather };
    }
    async getWeth (id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
    
        return data[0];
    }
    async getCity (city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
    
        return data[0];
    
    
    }
}
