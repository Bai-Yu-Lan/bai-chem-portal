import React, {FC} from 'react';
import {Table, Tag, Tooltip, Typography} from 'antd';
import {Center, Indent} from '@/constants/style-components';
import task_step from '@/assets/svg/task_step.svg';
import task_result_zh from '@/assets/svg/task_result_zh.svg';
import task_result_en from '@/assets/svg/task_result_en.svg';
import styles from '@/pages/task/index.module.less';
import ConfirmBox from './confirm-box';
import {taskData} from '@/constants';
import {useTranslation} from 'react-i18next';

const {Paragraph, Text, Link} = Typography;

const TaskReview: FC = () => {
    const {t} = useTranslation();
    const reaction = t('task.menu.reaction');
    const attribute = t('task.menu.attribute');
    const productivity = t('task.menu.conditions');
    const synthesis = t('task.menu.synthesis');
    const conditions = t('task.menu.productivity');

    return (
        <Typography className="size-16">
            <div className="margin-t-32">
                <Text strong className="size-20">
                    {t('task.content.title1')}
                </Text>
            </div>
            <Indent>
                {t('task.content.text1')}
                <Link
                    href="https://github.com/ChemFoundationModels/ChemLLMBench"
                    target="_blank"
                    className="size-16"
                >
                    {t('task.content.textLink')}
                    <span style={{verticalAlign: 'super', fontSize: '12px'}}>
                        {t('task.content.count')}
                    </span>
                </Link>
                {t('task.content.textmore')}
            </Indent>
            <p className="text_center table_footer">{t('task.content.tableTitle')}</p>
            <div className="table_center margin-b-16">
                <Table
                    columns={[
                        {
                            title: 'instruction',
                            dataIndex: 'Instruction',
                            ellipsis: true,
                            width: 200,
                            render: v => (
                                <Tag
                                    color="green"
                                    style={{
                                        maxWidth: '95%',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <Tooltip title={v} placement="topLeft">
                                        {v}
                                    </Tooltip>
                                </Tag>
                            ),
                        },
                        {
                            title: 'input',
                            dataIndex: 'Input',
                            ellipsis: true,
                            width: 200,
                            render: v => (
                                <Tag
                                    color="gold"
                                    style={{
                                        maxWidth: '95%',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <Tooltip title={v} placement="topLeft">
                                        {v}
                                    </Tooltip>
                                </Tag>
                            ),
                        },
                        {
                            title: 'output',
                            dataIndex: 'Output',
                            ellipsis: true,
                            width: 200,
                            render: v => (
                                <Tag
                                    color="geekblue"
                                    style={{
                                        maxWidth: '95%',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <Tooltip title={v} placement="topLeft">
                                        {v}
                                    </Tooltip>
                                </Tag>
                            ),
                        },
                        {
                            title: 'type',
                            dataIndex: 'Type',

                            render: v => <Tag color="cyan">{v}</Tag>,
                        },
                    ]}
                    pagination={false}
                    dataSource={taskData}
                />
            </div>
            <div>
                <Text strong className="size-20">
                    {t('task.content.title2')}
                </Text>
                <Paragraph className='margin-b-12'>
                    <Text strong className="size-18">
                        {t('task.content.subTitle1')}
                    </Text>
                    <Indent className='size-16'>{t('task.content.text2')}</Indent>
                </Paragraph>
                <Paragraph className='margin-b-12'>
                    <Text strong className="size-18">
                        {t('task.content.subTitle2')}
                    </Text>
                    <ul className='size-16'>
                        <li>{t('task.content.text3', {reaction})} </li>
                        <li>{t('task.content.text4', {attribute})}</li>
                        <li>{t('task.content.text5', {synthesis})}</li>
                        <li>{t('task.content.text6', {productivity})}</li>
                        <li>{t('task.content.text7', {conditions})} </li>
                    </ul>
                </Paragraph>
                <Paragraph className={styles.text}>
                    <Text strong className="size-18">
                        {t('task.content.subTitle3')}
                    </Text>
                    <Indent>
                        {t('task.content.text8')}
                        {t('task.content.text9')}
                    </Indent>
                </Paragraph>
                <Center>
                    <img src={task_step} alt="task_step" style={{width: '750px'}} />
                </Center>
                <p className="text_center table_footer">{t('task.content.echarts1')}</p>
                <Paragraph className={styles.text}>
                    <Text strong className="size-18">
                        {t('task.content.subTitle4')}
                    </Text>
                    <Indent className='margin-b-12'>{t('task.content.text10')}</Indent>
                </Paragraph>
                <ConfirmBox />
                <Paragraph className={styles.text}>
                    <Text strong className="size-18">
                        {t('task.content.subTitle5')}
                    </Text>
                    <Indent style={{marginBottom: 0}}>{t('task.content.text11')}</Indent>
                    <Indent>{t('task.content.text12')}</Indent>
                </Paragraph>
                <Center>
                    <img
                        src={
                            localStorage.getItem('lang') === 'en' ? task_result_zh : task_result_en
                        }
                        alt="task_result"
                        style={{width: '750px'}}
                    />
                </Center>

                <p className="text_center table_footer">{t('task.content.echarts')}</p>
                <Indent className='margin-b-12'>{t('task.content.text13')}</Indent>
                <Text strong className="size-18">
                    {t('task.content.references')}
                </Text>
                <p className="size-14">{t('task.content.refContent')}</p>
            </div>
        </Typography>
    );
};
export default TaskReview;
