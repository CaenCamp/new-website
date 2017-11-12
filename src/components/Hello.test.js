import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Hello from './Hello';

describe('Simple bootstrap hello component', () => {
    test('it should display the name passed as props', () => {
        const wrapper = shallow(<Hello who="tester" />);

        expect(wrapper.text()).toEqual('Hello tester!');
    });
});
