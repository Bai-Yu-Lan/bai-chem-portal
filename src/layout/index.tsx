import React, {FC} from 'react';
import {Layout as AntLayout} from 'antd';
import Header from './header';
import {Outlet} from 'react-router';
import styled from '@emotion/styled';

const Main = styled('main')`
    min-height: calc(100vh - 70px);
`;
const Layout: FC = () => {
    return (
        <AntLayout>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </AntLayout>
    );
};

export default Layout;
