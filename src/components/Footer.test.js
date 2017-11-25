import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Header, { SocialLink } from './Footer';

describe('Footer component', () => {
    test('it should display social links', () => {
        const wrapper = shallow(<Header />);
        const socialLinks = wrapper.find(SocialLink);
        expect(socialLinks.length).toEqual(7);
        socialLinks.forEach(link => {
            const href = link.prop('href');
            const name = link
                .html()
                .split('>')[1]
                .split('<')[0];
            switch (name) {
                case 'Meetup':
                    expect(href).toEqual('https://www.meetup.com/CaenCamp');
                    break;
                case 'GitHub':
                    expect(href).toEqual('https://github.com/CaenCamp');
                    break;
                case 'Twitter':
                    expect(href).toEqual('https://twitter.com/caencamp');
                    break;
                case 'YouTube':
                    expect(href).toEqual(
                        'https://www.youtube.com/channel/UCLX4DP_fDCZ4fsgbUZsGaUw',
                    );
                    break;
                case 'Trello':
                    expect(href).toEqual(
                        'https://trello.com/b/ROiO9tng/caencamp',
                    );
                    break;
                case 'Slack':
                    expect(href).toEqual('https://slack.com/intl/fr-fr');
                    break;
                case 'Facebook':
                    expect(href).toEqual('https://www.facebook.com/CaenCamp/');
                    break;
                default:
                    expect(href).toEqual(name);
            }
        });
    });
});
