import React, { Component } from 'react';
import './App.css';
import './nprogress.css'
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { InfoAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';


class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    infoText: ''
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location) =>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(',').shift()
      return {city, number};
    })
    return data;
  };

  render() {
  
    return (
    <div className="App">
      <h1>Meet App</h1>
      <h4>Choose your nearest city</h4>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <NumberOfEvents eventCount={this.state.eventCount} updateEvents={this.updateEvents}/>
      <h4>Events in each city</h4>
       
       <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
          
          <ResponsiveContainer height={400}>
            <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
       </div>
      


      <EventList events={this.state.events}/>
      <InfoAlert text={this.state.text} />
      
    </div>
  );
  }
}

export default App;
