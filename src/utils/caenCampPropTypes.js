import PropTypes from 'prop-types';

export const talkPropType = PropTypes.shape({
    edition: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(speakerPropType),
    title: PropTypes.string.isRequired,
});

export const speakerPropType = PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    slug: PropTypes.string,
    picture: PropTypes.string,
    resume: PropTypes.string,
});

export const dojoPropType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    craftsmen: PropTypes.arrayOf(speakerPropType),
});
