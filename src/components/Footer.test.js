import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Header, { SocialLink } from './Footer';

describe('Footer component', () => {
    test('it should display social links', () => {
        const links = [
            {
                title: 'Link 1',
                url: 'url1',
            },
            {
                title: 'Link 2',
                url: 'url2',
            },
        ];
        const wrapper = shallow(<Header socialLinks={links} />);
        const socialLinks = wrapper.find(SocialLink);
        expect(socialLinks.length).toEqual(2);
        socialLinks.forEach(link => {
            const href = link.prop('href');
            const name = link
                .html()
                .split('>')[1]
                .split('<')[0];
            switch (name) {
                case 'Link 1':
                    expect(href).toEqual('url1');
                    break;
                case 'Link 2':
                    expect(href).toEqual('url2');
                    break;
                default:
                    expect(href).toEqual(name);
            }
        });
    });
});
