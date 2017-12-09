import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { SpeakerListItem } from './listItem';

describe('speaker list item', () => {
    test('it should display speaker name (first name then last name', () => {
        const wrapper = shallow(
            <SpeakerListItem
                speaker={{
                    firstName: 'John',
                    lastName: 'Doe',
                    slug: 'john-do',
                }}
            />,
        );
        expect(wrapper.find('a').text()).toEqual('John Doe');
    });

    test('it should display a link to the speaker page', () => {
        const wrapper = shallow(
            <SpeakerListItem
                speaker={{
                    firstName: 'John',
                    lastName: 'Doe',
                    slug: 'john-do',
                }}
            />,
        );
        expect(wrapper.find('a').prop('href')).toEqual('/speakers/john-do');
    });
});
