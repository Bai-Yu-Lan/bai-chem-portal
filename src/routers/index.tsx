import {useRoutes} from 'react-router';
import React, {lazy} from 'react';

import Layout from '@/layout';

const Home = lazy(() => import('@/pages/home'));
const Question = lazy(() => import('@/pages/question'));
const Task = lazy(() => import('@/pages/task'));
const TaskReview = lazy(() => import('@/pages/task-review'));
const Reaction = lazy(() => import('@/pages/reaction'));
const Property = lazy(() => import('@/pages/property'));
const Inverse = lazy(() => import('@/pages/inverse'));
const Productivity = lazy(() => import('@/pages/productivity'));
const Conditional = lazy(() => import('@/pages/conditional'));

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },

            {
                path: 'question',
                element: <Question />,
            },
            {
                path: 'task',
                element: <Task />,
                children: [
                    {
                        index: true,
                        element: <TaskReview />,
                    },
                    {
                        path: 'reaction',
                        element: <Reaction />,
                    },
                    {
                        path: 'property',
                        element: <Property />,
                    },
                    {
                        path: 'inverse-synthesis',
                        element: <Inverse />,
                    },
                    {
                        path: 'productivity',
                        element: <Productivity />,
                    },
                    {
                        path: 'conditional',
                        element: <Conditional />,
                    },
                ],
            },
        ],
    },
];

export const Routers = () => useRoutes(routes);
