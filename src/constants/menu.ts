export const TASK_MENULIST = [
    {
        title: 'task.menu.reaction',
        path: 'reaction',
    },
    {
        title: 'task.menu.attribute',
        path: 'property',
    },
    {
        title: 'task.menu.synthesis',
        path: 'inverse-synthesis',
    },
    {
        title: 'task.menu.productivity',
        path: 'productivity',
    },
    {
        title: 'task.menu.conditions',
        path: 'conditional',
    },
];

export const MENULIST = [
    {label: 'header.down.home', key: '/'},
    {label: 'header.down.task', key: '/task'},
    {
        label: 'header.down.test',
        key: 'test',
        children: [
            {
                label: 'ChemLLMBench',
                key: 'https://github.com/ChemFoundationModels/ChemLLMBench/tree/main/data',
            },
            // {
            //     label: 'Canonicalized_raw_test',
            //     key: 'https://github.com/Zhanghahah/Lavoisier/tree/main/data',
            // },
        ],
    },
    {
        label: 'header.down.projectAddress',
        key: '/project',
        children: [
            {
                label: 'header.down.copywriting1',
                key: 'https://github.com/Bai-Yu-Lan',
            },
        ],
    },
    {
        label: 'header.down.api',
        key: '/api',
        children: [
            {
                label: 'header.down.copywriting2',
                key: 'http://aiplatform.ai4s.sjtu.edu.cn/chat-bot',
            },
        ],
    },
    {
        label: 'header.down.problem',
        key: '/question',
    },
];

export const PathToTitle = [
    {
        path: 'task',
        title: 'header.down.task',
    },
    {
        path: 'reaction',
        title: 'header.down.task—task.menu.reaction',
    },
    {
        path: 'property',
        title: 'header.down.task—task.menu.attribute',
    },
    {
        path: 'inverse-synthesis',
        title: 'header.down.task—task.menu.synthesis',
    },
    {
        path: 'productivity',
        title: 'header.down.task—task.menu.productivity',
    },
    {
        path: 'conditional',
        title: 'header.down.task—task.menu.conditions',
    },
];
