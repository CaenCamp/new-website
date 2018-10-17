import { Helmet } from 'react-helmet';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Content, SingleColumn } from '../components/Content';

const Form = styled.form`
    border: 1px solid ${({ theme }) => theme.greyLight};
    border-radius: 0.5rem;
    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);
    background-color: ${({ theme }) => theme.greyLight};
    width: 70%;
    margin: 0 auto;
    padding: 2rem;
`;

const InputContainer = styled.ul`
    box-sizing: border-box;
    list-style-type: none;
    padding: 0;
    li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
        label,
        p {
            padding: 8px;
            font-weight: 300;
            letter-spacing: 0.09em;
            text-transform: uppercase;
        }
        & > label,
        p {
            flex: 1 0 120px;
            max-width: 220px;
        }
        & > label + * {
            flex: 1 0 220px;
        }
        input,
        textarea {
            padding: 15px;
            border: none;
        }
        button {
            margin-left: auto;
            padding: 1rem;
            border: none;
            background: #333;
            color: #f2f2f2;
            text-transform: uppercase;
            letter-spacing: 0.09em;
            border-radius: 2px;
            -webkit-transition: background-color 0.2s;
            cursor: pointer;
            &:hover {
                background-color: ${({ theme }) => theme.green};
            }
        }
    }
`;

const CustomSelect = styled.div`
    position: relative;
    display: block;
    min-width: 220px;
    background-color: ${({ theme }) => theme.white};
    z-index: 10;
    select {
        border: none;
        outline: none;
        background: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0;
        margin: 0;
        display: block;
        width: 100%;
        padding: 12px 55px 15px 15px;
        font-size: 14px;
    }
    &:after {
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        height: 100%;
        line-height: 38px;
        content: '∨';
        text-align: center;
        color: ${({ theme }) => theme.grey};
        font-size: 24px;
        font-weight: bold;
        border-left: 1px solid ${({ theme }) => theme.greyLight};
        z-index: -1;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
`;
const Intro = styled.p`
    font-size: 1.3rem;
    padding: 1rem 0;
`;

export default () => (
    <Layout>
        <div>
            <Helmet title="CaenCamp: proposez un talk">
                <meta name="description" content="Participez CaenCamp" />
            </Helmet>
            <Content id="callForPaperContent">
                <SingleColumn>
                    <Title>Call for speakers</Title>
                    <Intro>
                        Les bonnes raisons de faire un talk sont multiples et
                        internet regorge de posts de blog les énumérant.<br />{' '}
                        Mais une chose est certaine : la communauté en profitera
                        et vous en profiterez. Alors n’hésitez pas à proposer un
                        sujet ;)
                    </Intro>
                    <Form
                        method="POST"
                        action="https://formspree.io/contact@alexisjanvier.net"
                    >
                        <InputContainer>
                            <li>
                                <label>Qui êtes-vous ?</label>
                                <input
                                    type="text"
                                    name="speaker"
                                    placeholder="John Doe"
                                    required
                                />
                            </li>
                            <li>
                                <label>
                                    Quel serait le titre de votre intervention ?
                                </label>
                                <input type="text" name="title" required />
                            </li>
                            <li>
                                <label>
                                    Quel serait le format de votre proposition ?
                                </label>
                                <CustomSelect>
                                    <select id="format" name="format" required>
                                        <option value="short" selected>
                                            Lightning talk (5min)
                                        </option>
                                        <option value="talk">
                                            Talk standard (environ 30min)
                                        </option>
                                    </select>
                                </CustomSelect>
                            </li>
                            <li>
                                <label>En quelques mots</label>
                                <textarea
                                    name="message"
                                    placeholder="200 caractères minimum"
                                    minlength="200"
                                    rows="5"
                                    required
                                />
                            </li>
                            <li>
                                <label> Comment peut-on vous contacter ?</label>
                                <input
                                    type="text"
                                    name="contact"
                                    placeholder="votre email, votre identifiant twitter, votre téléphone ..."
                                    required
                                />
                            </li>
                            <li>
                                <button type="submit">
                                    Envoyer votre proposition
                                </button>
                            </li>
                        </InputContainer>
                    </Form>
                </SingleColumn>
            </Content>
        </div>
    </Layout>
);
