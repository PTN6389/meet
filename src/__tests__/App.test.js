import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { extractLocations, getEvents } from '../api';
import {mockData} from '../mockData';


describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });

});

describe('<App /> integration', () => {

    test('App passes "events" state as prop to EventList', () => {
        const AppWrapper = mount(<App />);
        const AppEventState = AppWrapper.state('events');
        expect(AppEventState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventState);
        AppWrapper.unmount();
    });

    test('App passes "locations" state as prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationState = AppWrapper.state('locations');
        expect(AppLocationState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationState);
        AppWrapper.unmount();
    });

    test('get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
      });

      test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount(); 
      }); 

      test('App passes "eventCount" state as prop to NumberOfEvents', () => {
        const AppWrapper = mount(<App />);
        const AppEventCountState = AppWrapper.state('eventCount');
        expect(AppEventCountState).not.toEqual(undefined);
        expect(AppWrapper.find(NumberOfEvents).props().eventCount).toEqual(AppEventCountState);
        AppWrapper.unmount();
    });

    test('get list of events matching the eventCount selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const selectedEventCount = { target: {value: 2 }};
        await NumberOfEventsWrapper.instance().handleInputChanged(selectedEventCount);
        
        expect (AppWrapper.state('events').length).toEqual(2);
        AppWrapper.unmount();
      });

});
