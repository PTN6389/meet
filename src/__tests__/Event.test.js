import React from "react";
import { shallow } from 'enzyme';
import Event from "../Event";

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
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

})