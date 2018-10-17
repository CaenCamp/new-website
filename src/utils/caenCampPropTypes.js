import PropTypes from 'prop-types';

export const speakerPropType = PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    slug: PropTypes.string,
    picture: PropTypes.string,
    resume: PropTypes.string,
});

export const talkPropType = PropTypes.shape({
    edition: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(speakerPropType),
    title: PropTypes.string.isRequired,
});

export const dojoPropType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    craftsmen: PropTypes.arrayOf(speakerPropType),
});

export const campPropType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string,
    resume: PropTypes.string,
});
