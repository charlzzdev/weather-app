import React from 'react';
import Forecast from './Forecast';

const SearchResults = (props) => {
      return(
            <div className="SearchResults">
                  {
                        props.cityData.name !== undefined ? (
                              <div className="card">
                                    <div className="card-image">
                                          <img src="https://www.cray.com/blog/wp-content/uploads/2015/09/Weather-Blog-Image.jpg" alt=""/>
                                          <span className="card-title activator">{props.cityData.name}, <strong>{props.cityData.country}</strong> ({props.cityData.lat}, {props.cityData.lon})</span>
                                          <button className="btn-floating halfway-fab waves-effect waves-light activator"><i>F</i></button>
                                    </div>
                                    <div className="card-content">
                                          <img src={props.cityData.icon} alt=""/>
                                          <ul>
                                                <li><strong>Weather:</strong> {props.cityData.weather} ({props.cityData.weatherDesc})</li>
                                                <li>
                                                      <strong>Temperature:</strong> {Math.floor(props.cityData.temp - 273.15)}°C
                                                      (Min: {Math.floor(props.cityData.minTemp - 273.15)}°C,
                                                      Max: {Math.floor(props.cityData.maxTemp - 273.15)}°C)
                                                </li>
                                                <li><strong>Cloudiness:</strong> {props.cityData.cloudiness}%</li>
                                                <li><strong>Humidity:</strong> {props.cityData.humidity}%</li>
                                                <li><strong>Pressure:</strong> {props.cityData.pressure} hPa</li>
                                                <li><strong>Visibility:</strong> {props.cityData.visibility} meters</li>
                                                <li><strong>Wind direction:</strong> {props.cityData.windDeg}°</li>
                                                <li><strong>Wind speed:</strong> {props.cityData.windSpeed} m/s</li>
                                          </ul>
                                    </div>
                                    <div className="card-reveal">
                                          <span className="card-title">Forecast</span>
                                          <Forecast forecast_ready={props.forecast_ready} cityName={props.cityName}/>
                                    </div>
                              </div>
                        ) : (null)
                  }
            </div>
      )
}

export default SearchResults;