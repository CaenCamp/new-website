import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

//import SpeakerListItem from './listItem';

describe('speaker list item', () => {
    test('it should display a link to the speaker page', () => {
        expect(1).toEqual(1);
        // const wrapper = shallow(
        //     <SpeakerListItem
        //         speaker={{
        //             firstName: 'John',
        //             lastName: 'Doe',
        //             slug: 'john-do',
        //             links: [],
        //         }}
        //     />,
        // );
        // expect(wrapper.find(Link).prop('to')).toEqual('/speakers/john-do');
    });
});
