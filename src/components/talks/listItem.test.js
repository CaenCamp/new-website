import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

import { TalkListItem } from './listItem';

describe('Talk list item', () => {
    test('it should display a link to the talk page', () => {
        const wrapper = shallow(
            <TalkListItem
                talk={{
                    edition: 1,
                    slug: 'test-edition',
                    speakers: [],
                    title: 'Test Talk',
                    tags: [],
                    video: null,
                }}
            />,
        );
        expect(wrapper.find(Link).prop('to')).toEqual('/talks/test-edition');
    });
});
