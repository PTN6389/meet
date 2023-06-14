import React, { Component } from 'react';
import './App.css';
import './nprogress.css'
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';


class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if(this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    })
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents = (location === 'all' || location === undefined) ?
        events :
        events.filter((event) => event.location === location);

        if(eventCount) {
          locationEvents = locationEvents.slice(0, eventCount);
        } else {
          eventCount = this.state.eventCount;
        }
      this.setState({
        events: locationEvents,
        eventCount: eventCount
      });
    });
  }

  render() {
  
    return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <NumberOfEvents eventCount={this.state.eventCount} updateEvents={this.updateEvents}/>
      <EventList events={this.state.events}/>
      
    </div>
  );
  }
}

export default App;
