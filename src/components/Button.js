import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(props => <Link {...props} />)`
    padding: 16px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.green};
    font-size: 1.1rem;
    transition: 0.3s all ease;
    &:hover {
        color: ${({ theme }) => theme.blue};
        border-color: ${({ theme }) => theme.blue};
    }
`;

const Button = ({ to, children }) => (
    <StyledLink to={to}>{children}</StyledLink>
);

Button.propTypes = {
    to: PropTypes.string.isRequired,
};

export default Button;
