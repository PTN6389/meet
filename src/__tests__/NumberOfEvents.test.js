import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe ('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() =>{}} />);
    });

    test('render number of events displayed text box', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    test('render default number of events',()=>{
        const eventCount = NumberOfEventsWrapper.state('eventCount');
        expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(eventCount);
    });

    test('render state change when number of events displayed changes', () => {
        NumberOfEventsWrapper.setState({eventCount: 32});
        const eventObject = { target: {value: 10}};
        NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('eventCount')).toBe(10);
    });

})