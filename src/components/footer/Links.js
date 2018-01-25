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
        margin: 0 1rem;
        -webkit-transition: color 0.2s;
        &:hover {
            color: crimson;
        }
    }
`;

export default class Links extends Component {
    render() {
        const { links } = this.props;
        console.log(links);
        return (
            <LinksContainer>
                {links.length > 0 &&
                    links.map(link => (
                        <a key={link.title} href={link.url}>
                            <i
                                className={`fa fa-${link.title.toLowerCase()} fa-3x`}
                            />
                        </a>
                    ))}
            </LinksContainer>
        );
    }
}
