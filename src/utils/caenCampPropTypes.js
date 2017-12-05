import PropTypes from 'prop-types';

export const talkPropType = {
    edition: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(speakerPropType),
    title: PropTypes.string.isRequired,
};

export const speakerPropType = {
    firstName: PropTypes.string.isRequired,
    lasttName: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};
