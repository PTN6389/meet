import React from "react";
import { shallow } from 'enzyme';
import Event from "../Event";
import { mockData } from "../mockData";


describe('<Event /> component', () => {
    let EventWrapper, eventDetails;
    beforeAll(() => {
        eventDetails = mockData[0];
        EventWrapper = shallow(<Event eventDetails={eventDetails} />);
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

    test('render summary event details onClick', () => {
        EventWrapper.find('.showDetails').simulate('click');
        expect(EventWrapper.find('.summary').text()).toBe(`${eventDetails.summary}`);
    });

})