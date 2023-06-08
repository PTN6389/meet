import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: [],
    locations: []
  }

  render() {
  
    return (
    <div className="App">
      <EventList events={this.state.events}/>
      <CitySearch locations={this.state.locations}/>
      <NumberOfEvents />
      
    </div>
  );
  }
}

export default App;
