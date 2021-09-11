import { Helmet } from 'react-helmet';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Content, SingleColumn } from '../components/Content';
import CCC from '../components/CodingCaenCamp';

export const Thanks = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

export default () => {
    return (
        <Layout>
            <div>
                <Helmet title="CaenCamp: les Coding Caen Camp (CCC)">
                    <meta
                        name="description"
                        content="Affutez vos skills aux Coding Caen Camp"
                    />
                </Helmet>
                <Content id="dojoContent">
                    <SingleColumn>
                        <CCC />
                    </SingleColumn>
                </Content>
            </div>
        </Layout>
    );
};
