import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Header, { Title, Baseline } from './Header';
import Logo from './Logo';

describe('Header component', () => {
    test('it should display a logo', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.find(Logo).length).toEqual(1);
    });

    test('it should display a Title', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.find(Title).length).toEqual(1);
        expect(wrapper.find(Title).html()).toContain('CaenCamp');
    });

    test('it should display a Baseline', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.find(Baseline).length).toEqual(1);
        expect(wrapper.find(Baseline).html()).toContain(
            'Ici la baseline des Caencamp quand on en aura une.',
        );
    });
});
