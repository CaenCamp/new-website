import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SideMenu from './SideMenu';

describe('SideMenu component', () => {
    test('it should display a link to the Call for paper page', () => {
        const wrapper = shallow(<SideMenu />);

        expect(wrapper.find('.linkToCallForPaper').length).toEqual(1);
        expect(wrapper.find('.linkToCallForPaper').prop('href')).toEqual(
            '/call-for-paper',
        );
    });

    test('it should display a link to the Welcome us page', () => {
        const wrapper = shallow(<SideMenu />);

        expect(wrapper.find('.linkToWelcomeUs').length).toEqual(1);
        expect(wrapper.find('.linkToWelcomeUs').prop('href')).toEqual(
            '/welcome-us',
        );
    });

    test('it should display a link to the Coding Dojo page', () => {
        const wrapper = shallow(<SideMenu />);

        expect(wrapper.find('.linkToCodingDojo').length).toEqual(1);
        expect(wrapper.find('.linkToCodingDojo').prop('href')).toEqual(
            '/coding-dojo',
        );
    });
});
