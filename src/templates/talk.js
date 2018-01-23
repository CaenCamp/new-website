import format from 'date-fns/format';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import locale from 'date-fns/locale/fr';
import React from 'react';

import { formatTalkWithSpeakers, formatMeetup } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import { SpeakerListItem } from '../components/speakers/listItem';

const renderMeetupLink = meetupId => {
    if (meetupId === null || meetupId === '') {
        return '';
    }

    return (
        <small>
            {` - `}
            <a
                href={`https://www.meetup.com/fr-FR/CaenCamp/events/${meetupId}/`}
            >
                Meetup
            </a>
        </small>
    );
};

const renderMeetupRSVP = meetup => {
    if (meetup === null || meetup.yes_rsvp_count === null) {
        return '';
    }

    return <p>{meetup.yes_rsvp_count} participants</p>;
};

export default ({ data }) => {
    const talk = formatTalkWithSpeakers(data.rawTalk, data.speakers.edges);
    const meetup = formatMeetup(data.meetup);

    return (
        <SingleColumn>
            <Helmet>
                <title>{talk.title}</title>
                <meta name="description" content={talk.description} />
                <meta name="keywords" content={`${talk.tags}`} />
            </Helmet>
            <Link to="/talks">&lt;- Tous les talks</Link>
            <div>
                <h1>
                    {talk.title}
                    {renderMeetupLink(talk.meetupId)}
                </h1>
                <p>{format(talk.date, 'DD MMMM YYYY', { locale })}</p>
                {renderMeetupRSVP(meetup)}
                <p>{`${talk.tags}`}</p>
                <p>{talk.description}</p>
                <h3>Speakers</h3>
                <ul>
                    {talk.speakers.map(speaker => (
                        <SpeakerListItem key={speaker.slug} speaker={speaker} />
                    ))}
                </ul>
            </div>

            <div dangerouslySetInnerHTML={{ __html: talk.html }} />
        </SingleColumn>
    );
};

export const query = graphql`
    query TalkBySlug($slug: String!, $meetupId: String) {
        rawTalk: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                meetupId
                date
                tags
                description
                speakers
            }
        }
        speakers: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/speakers/**" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        firstName
                        lastName
                        slug
                    }
                }
            }
        }
        meetup: allMeetupEvent(
            limit: 1
            filter: { id: { eq: $meetupId }, status: { eq: "past" } }
        ) {
            edges {
                node {
                    name
                    yes_rsvp_count
                }
            }
        }
    }
`;
