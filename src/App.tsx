import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Spin, ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import {Routers} from '@/routers';
import '@/i18n/index';

function App() {
    return (
        <BrowserRouter basename='/chemistry'>
            <Suspense fallback={<Spin />}>
                <Routers />
            </Suspense>
        </BrowserRouter>
    );
}

function AppWrap() {
    return (
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    );
}

export default AppWrap;
