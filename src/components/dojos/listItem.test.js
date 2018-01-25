import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

import { DojoListItem } from './listItem';

describe('Dojo List Item', () => {
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
        expect(wrapper.find(Link).prop('to')).toEqual('/coding-dojo/dojo-slug');
    });
});
