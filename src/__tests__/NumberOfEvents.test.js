import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe ('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render number of events displayed text box', () => {
        expect(NumberOfEventsWrapper.find('.numberDisplayed')).toHaveLength(1);
    });

    test('render default number of events',()=>{
        const numberDisplayed = NumberOfEventsWrapper.state('numberDisplayed');
        expect(NumberOfEventsWrapper.find('.numberDisplayed').prop('value')).toBe(numberDisplayed);
    });

    test('render state change when number of events displayed changes', () => {
        NumberOfEventsWrapper.setState({numberDisplayed: 32});
        const eventObject = { target: {value: 10}};
        NumberOfEventsWrapper.find('.numberDisplayed').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberDisplayed')).toBe(10);
    });

})