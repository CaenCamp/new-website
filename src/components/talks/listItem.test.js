import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { TalkListItem } from './listItem';

describe('Talk list item', () => {
    test('it should display Edition number', () => {
        const wrapper = shallow(
            <TalkListItem
                talk={{
                    edition: 1,
                    slug: 'test-edition',
                    speakers: [],
                    title: 'Test Talk',
                }}
            />,
        );
        expect(wrapper.find('li').text()).toContain('Edition 1:');
    });

    test('it should display talk title as link', () => {
        const wrapper = shallow(
            <TalkListItem
                talk={{
                    edition: 1,
                    slug: 'test-edition',
                    speakers: [],
                    title: 'Test Talk',
                }}
            />,
        );
        expect(wrapper.find('a').text()).toEqual('Test Talk');
    });

    test('it should display a link to the talk page', () => {
        const wrapper = shallow(
            <TalkListItem
                talk={{
                    edition: 1,
                    slug: 'test-edition',
                    speakers: [],
                    title: 'Test Talk',
                }}
            />,
        );
        expect(wrapper.find('a').prop('href')).toEqual('/talks/test-edition');
    });

    test('it should display speakers name', () => {
        const wrapper = shallow(
            <TalkListItem
                talk={{
                    edition: 1,
                    slug: 'test-edition',
                    title: 'TestTalk',
                    speakers: [
                        {
                            firstName: 'John',
                            lastName: 'Doe',
                        },
                        {
                            firstName: 'Foo',
                            lastName: 'Bar',
                        },
                    ],
                }}
            />,
        );
        expect(wrapper.find('li').text()).toContain('par John Doe, Foo Bar');
    });

    test('it should not display speakers name if speakers array is empty', () => {
        const wrapper = shallow(
            <TalkListItem
                talk={{
                    edition: 1,
                    slug: 'test-edition',
                    speakers: [],
                    title: 'TestTalk',
                }}
            />,
        );
        expect(wrapper.find('li').text()).not.toContain('par');
    });
});
