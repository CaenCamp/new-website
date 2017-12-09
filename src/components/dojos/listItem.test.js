import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { DojoListItem } from './listItem';

describe('Dojo List Item', () => {
    test('it should display dojo title', () => {
        const wrapper = shallow(
            <DojoListItem
                dojo={{
                    title: 'Dojo Title',
                    slug: 'dojo-slug',
                    craftsmen: [],
                }}
            />,
        );
        expect(wrapper.find('a').text()).toEqual('Dojo Title');
    });

    test('it should display a link to the dojo page', () => {
        const wrapper = shallow(
            <DojoListItem
                dojo={{
                    title: 'Dojo Title',
                    slug: 'dojo-slug',
                    craftsmen: [],
                }}
            />,
        );
        expect(wrapper.find('a').prop('href')).toEqual(
            '/coding-dojo/dojo-slug',
        );
    });

    test('it should display craftsmen name', () => {
        const wrapper = shallow(
            <DojoListItem
                dojo={{
                    title: 'Dojo Title',
                    slug: 'dojo-slug',
                    craftsmen: [
                        {
                            firstName: 'John',
                            lastName: 'Doe',
                        },
                    ],
                }}
            />,
        );
        expect(wrapper.find('li').text()).toContain('avec John Doe');
    });

    test('it should not display craftsmen name if craftmen array is empty', () => {
        const wrapper = shallow(
            <DojoListItem
                dojo={{
                    title: 'Dojo Title',
                    slug: 'dojo-slug',
                    craftsmen: [],
                }}
            />,
        );
        expect(wrapper.find('li').text()).not.toContain('avec');
    });
});
