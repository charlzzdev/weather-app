import React, { Component } from 'react';
import Search from './components/Search';

class App extends Component {
      render() {
            return (
                  <div className="App center">
                        <h2>Weather App</h2>
                        <h5>This app shows you the current weather of any city.</h5>
                        <Search />
                  </div>
            );
      }
}

export default App;
