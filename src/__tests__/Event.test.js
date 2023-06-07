import React from "react";
import { shallow } from 'enzyme';
import Event from "../Event";
import { mockData } from "../mockData";


describe('<Event /> component', () => {
    let EventWrapper, eventDetails;
    beforeAll(() => {
        eventDetails = mockData[0];
        EventWrapper = shallow(<Event eventDetails = {eventDetails} />);
    });

    test('render event summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render event date', () => {
        expect(EventWrapper.find('.date')).toHaveLength(1);
    });

    test('render event link', () => {
        expect(EventWrapper.find('.link')).toHaveLength(1);
    });

    test('render event description', () => {
        expect(EventWrapper.find('.description')).toHaveLength(1);
    });

    test('event details are collapsed', () => {
        expect(EventWrapper.state('showDetails')).toBe(false);
    })

    test('change to show event details', () => {
        EventWrapper.setState({ showDetails: false });
        const eventObject = { target: {value: true }};
        EventWrapper.find('.showDetails').simulate('click', eventObject);
        expect(EventWrapper.state('showDetails')).toBe(true);
        expect(EventWrapper.find('.link').text()).toBe(eventDetails.htmlLink);
        expect(EventWrapper.find('.description').text()).toBe(eventDetails.description);
    })

    test('change to hide event details', () => {
        EventWrapper.setState({ showDetails: true });
        const eventObject = { target: {value: false}};
        EventWrapper.find('.hideDetails').simulate('click', eventObject);
        expect(EventWrapper.state('showDetails')).toBe(false);
    })

})