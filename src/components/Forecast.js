import React, {Component} from 'react';

class Forecast extends Component{
      state = {
            forecast: []
      };

      getForecast = () => {
            if(this.props.cityName.length > 1){
                  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.cityName}&appid=5be44980ca68a407fbce5803b86b4188`)
                        .then(response => response.json())
                        .then(data => {
                              this.setState({
                                    forecast: data.list
                              });
                        });
            }
      }

      componentDidMount(){
            this.getForecast();
      }

      componentWillReceiveProps(){
            if(this.props.readyToUpdate === true){
                  this.getForecast();
            }
      }
      
      render(){
            return(
                  <div className="Forecast">
                        {
                              this.state.forecast !== undefined ? (
                                    this.state.forecast.map(list => {
                                          return(
                                                <div key={list.dt}>
                                                      <div className="row">
                                                            <div className="col l12">
                                                                  <h5>{list.dt_txt} (UTC)</h5>
                                                            </div>
                                                            <div className="col l12">
                                                                  <img src={"https://openweathermap.org/img/w/" + list.weather[0].icon + ".png"} alt=""/>
                                                            </div>
                                                      </div>
                                                      <ul>
                                                            <li><strong>Weather:</strong> {list.weather[0].main} ({list.weather[0].description})</li>
                                                            <li>
                                                                  <strong>Temperature:</strong> {Math.floor(list.main.temp - 273.15)}°C
                                                                  (Min: {Math.floor(list.main.temp_min - 273.15)}°C,
                                                                  Max: {Math.floor(list.main.temp_max - 273.15)}°C)
                                                            </li>
                                                            <li><strong>Cloudiness:</strong> {list.clouds.all}%</li>
                                                            <li><strong>Humidity:</strong> {list.main.humidity}%</li>
                                                            <li><strong>Pressure:</strong> {list.main.pressure} hPa</li>
                                                            <li><strong>Wind direction:</strong> {list.wind.deg}°</li>
                                                            <li><strong>Wind speed:</strong> {list.wind.speed} m/s</li>
                                                      </ul>
                                                      <div className="divider"></div>
                                                </div>
                                          )
                                    })
                              ) : (null)
                        }
                  </div>
            )
      }
}

export default Forecast;