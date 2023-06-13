import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow } from 'enzyme';
import Event from "../Event";
import { mockData } from '../mockData';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        
        given('that an event is displayed', () => {
            
        });
        let EventWrapper, event;
        when('I view the event', () => {
            event = mockData[0];
            EventWrapper = shallow(<Event event = {event} />);
        });

        then('I can see the details are collapsed by default', () => {
            expect(EventWrapper.state('showDetails')).toBe(false);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let EventWrapper, event;
        given('that an events details is collapsed', () => {
            event = mockData[0];
            EventWrapper = shallow(<Event event = {event} />);
        });

        when('I choose to expand the event', () => {
            EventWrapper.find('.showDetails').simulate('click');
        });

        then('I can see the event details', () => {
            expect(EventWrapper.state('showDetails')).toBe(true);

        });

        test('User can collapse an event to hide its details.', ({ given, when, then }) => {
            let EventWrapper, event;
            given('that an events details is expanded', () => {
                event = mockData[0];
                EventWrapper = shallow(<Event event = {event} />);
                
            });
    
            when('I choose to collapse the event', () => {
                EventWrapper.find('.hideDetails').simulate('click');
            });
    
            then('I can see the event details are hidden', () => {
                expect(EventWrapper.state('showDetails')).toBe(false);
            });
        });
    });

});