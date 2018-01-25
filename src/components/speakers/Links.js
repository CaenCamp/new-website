import React, { Component } from 'react';
import styled from 'styled-components';

const LinksContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    margin-top: 1rem;
    a {
        color: ${({ theme }) => theme.grey};
        margin: 0 5px;
    }
`;

const validLinks = [
    'github',
    'hacker-news',
    'linkedin',
    'medium',
    'perso',
    'stack-overflow',
    'twitter',
];

const filterLinks = links =>
    links
        .filter(link => validLinks.includes(link.title.toLowerCase()))
        .map(link => ({
            url: link.url,
            class:
                link.title === 'perso'
                    ? 'fa-user-circle'
                    : `fa-${link.title.toLowerCase()}`,
        }));

export default class Links extends Component {
    handleClick = event => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    };

    render() {
        const links = this.props.links ? filterLinks(this.props.links) : [];
        return (
            <LinksContainer>
                {links.length > 0 &&
                    links.map(link => (
                        <a
                            key={link.class}
                            href={link.url}
                            onClick={this.handleClick}
                        >
                            <i className={`fa ${link.class}`} />
                        </a>
                    ))}
            </LinksContainer>
        );
    }
}
