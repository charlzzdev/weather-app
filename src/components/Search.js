import React, {Component} from 'react';
import SearchResults from './SearchResults';

class Search extends Component{
      state = {
            city: null,
            cityData: {},
            readyToUpdate: false
      }

      cityInputChanged = (e) => {
            let submitBtn = document.querySelector('#submitBtn');

            if(e.target.value !== ''){
                  submitBtn.className = 'btn waves-effect waves-light';
                  this.setState({
                        city: e.target.value,
                        readyToUpdate: false
                  });
            } else {
                  submitBtn.className = 'btn waves-effect waves-light disabled';
            }
      }

      cityInputSubmitted = (e) => {
            e.preventDefault();

            let zipRegex = /^\d*$/;
            let cityRegex = /^[a-zA-Z\s,]*$/;
            let info = document.querySelector('#info');

            if(zipRegex.test(this.state.city) === true) {
                  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.city}&appid=5be44980ca68a407fbce5803b86b4188`)
                        .then(response => response.json())
                        .then(data => {
                              if(data.cod !== 200){
                                    info.innerHTML = 'The entered zip code was not found.';
                              } else {
                                    this.getWeather(data, info);
                              }
                        });
            } else if(cityRegex.test(this.state.city) === true) {
                  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=5be44980ca68a407fbce5803b86b4188`)
                        .then(response => response.json())
                        .then(data => {
                              if(data.cod !== 200){
                                    info.innerHTML = 'The entered city was not found.';
                              } else {
                                    this.getWeather(data, info);
                              }
                        });
            } else {
                  info.innerHTML = 'The entered city/zip is invalid.';
            };

            this.setState({
                  readyToUpdate: true
            });
      }

      getWeather = (data, info) => {
            this.setState({
                  cityData: {
                        name: data.name,
                        cloudiness: data.clouds.all,
                        lat: data.coord.lat,
                        lon: data.coord.lon,
                        time: data.dt,
                        temp: data.main.temp,
                        maxTemp: data.main.temp_max,
                        minTemp: data.main.temp_min,
                        pressure: data.main.pressure,
                        humidity: data.main.humidity,
                        country: data.sys.country,
                        visibility: data.visibility,
                        weather: data.weather[0].main,
                        weatherDesc: data.weather[0].description,
                        icon: "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
                        windDeg: data.wind.deg,
                        windSpeed: data.wind.speed
                  }
            });
            info.innerHTML = '';
      }
      
      render(){
            return(
                  <div className="Search container center">
                        <form className="container" onSubmit={this.cityInputSubmitted}>
                              <div className="input-field">
                                    <label htmlFor="city">City name or ZIP code</label>
                                    <input type="text" id="city" onChange={this.cityInputChanged}/>
                                    <span className="helper-text red-text" id="info"></span>
                              </div>
                              <button className="btn waves-effect waves-light disabled" id="submitBtn">Submit</button>
                        </form>
                        <SearchResults cityData={this.state.cityData} readyToUpdate={this.state.readyToUpdate} cityName={this.state.city}/>
                  </div>
            )
      }
}

export default Search;