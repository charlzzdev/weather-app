import React from 'react';

const SearchResults = (props) => {
      return(
            <div className="SearchResults">
                  {
                        props.cityData.name !== undefined ? (
                              <div className="card">
                                    <div className="card-image">
                                          <img src="https://www.cray.com/blog/wp-content/uploads/2015/09/Weather-Blog-Image.jpg" alt=""/>
                                          <span className="card-title">{props.cityData.name}, <strong>{props.cityData.country}</strong> ({props.cityData.lat}, {props.cityData.lon})</span>
                                    </div>
                                    <div className="card-content">
                                          <ul>
                                                <li>Weather: {props.cityData.weather} ({props.cityData.weatherDesc})</li>
                                                <li>Temperature: {Math.floor(props.cityData.temp - 273.15)}°C</li>
                                                <li>Cloudiness: {props.cityData.cloudiness}%</li>
                                                <li>Humidity: {props.cityData.humidity}%</li>
                                                <li>Pressure: {props.cityData.pressure} hPa</li>
                                                <li>Visibility: {props.cityData.visibility} meters</li>
                                                <li>Wind direction: {props.cityData.windDeg}°</li>
                                                <li>Wind speed: {props.cityData.windSpeed} m/s</li>
                                          </ul>
                                    </div>
                              </div>
                        ) : (null)
                  }
            </div>
      )
}

export default SearchResults;