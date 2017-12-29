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

    test('it should display next meetup with no content in it', () => {
        const wrapper = shallow(<SideMenu meetup={null} />);

        expect(wrapper.find('.nextMeetup').length).toEqual(1);
        expect(wrapper.find('.nextMeetup').props('children').children).toEqual([
            <h5 className="nextMeetup__title">Prochaine rencontre</h5>,
            <div className="nextMeetup__content">Aucune rencontre à venir</div>,
        ]);
    });

    test('it should display next meetup with content in it', () => {
        const meetup = {
            name: 'Un super meetup de dingue',
            link: 'https://caencamp.fr',
            yes_rsvp_count: 42,
        };

        const wrapper = shallow(<SideMenu meetup={meetup} />);

        expect(wrapper.find('.nextMeetup').length).toEqual(1);
        expect(
            wrapper.find('.nextMeetup__content').props('children').children,
        ).toEqual([
            <div className="nextMeetup__content__name">{meetup.name}</div>,
            <div className="nextMeetup__content__rsvp">
                {meetup.yes_rsvp_count} participants
            </div>,
            <a
                href={meetup.link}
                target="_blank"
                className="nextMeetup__content__link"
            >
                S'inscrire
            </a>,
        ]);
    });
});
