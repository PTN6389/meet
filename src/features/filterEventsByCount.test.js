import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/filterEventsByCount.feature');

defineFeature(feature, test => {
    
    test('When user has not specified a number, 32 is the default number', ({ given, when, then }) => {
        let NumberOfEventsWrapper;
        given('that I see a list of events displayed', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        });

        when('I have not specified the number of events I want to see', () => {
            NumberOfEventsWrapper.state('eventCount');
        });

        then('I can see 32 events at one time', () => {
            expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let NumberOfEventsWrapper;
        given('that I see a list of events displayed', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        });

        when('I enter the number of events I want to see', () => {
            NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', { target: { value: 10 }});
        });

        then('I can see the number of events specified at one time', () => {         
            expect(NumberOfEventsWrapper.state('eventCount')).toBe(10);

        });
    });

});