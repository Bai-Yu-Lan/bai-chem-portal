/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, {FC} from 'react';
import {Table, Tag, Tooltip, Typography} from 'antd';
import {Indent} from '@/constants/style-components';
import {inverseData, inverseResultData} from '@/constants';
import {useTranslation} from 'react-i18next';

const {Text, Link} = Typography;

const Inverse: FC = () => {
    const {t} = useTranslation();
    return (
        <Typography className="size-16">
            <div className="margin-t-32">
                <Text strong className="size-20">
                    {t('task.reaction.title1')}
                </Text>
            </div>
            <Indent>{t('task.synthesis.text1')}</Indent>

            <p className="text_center table_footer">{t('task.synthesis.tableTitle1')}</p>
            <div className="table_center margin-b-16">
                <Table
                    pagination={false}
                    dataSource={inverseData}
                    columns={[
                        {
                            title: 'id',
                            dataIndex: 'id',
                            width: 150,
                            render: v => <Tag color="green">{v}</Tag>,
                        },
                        {
                            title: 'class',
                            dataIndex: 'class',
                            ellipsis: true,
                            width: 70,
                            render: v => <Tag color="cyan">{v}</Tag>,
                        },
                        {
                            title: 'reactants',
                            dataIndex: 'reactants',
                            width: 150,
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
                            title: 'reagents',
                            dataIndex: 'reagents',
                            width: 150,
                            render: v => (
                                <Tag
                                    color="blue"
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
                            title: 'production',
                            dataIndex: 'production',
                            width: 150,
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
                    ]}
                    footer={() => (
                        <p style={{width: '700px', fontWeight: 500}}>
                            {t('task.synthesis.tableResult')}
                        </p>
                    )}
                />
            </div>
            <Text strong className="size-20">
                {t('task.reaction.title2')}
            </Text>
            <Indent>
                {t('task.synthesis.text2')}
                <Link
                    href="https://github.com/ChemFoundationModels/ChemLLMBench/tree/main/data"
                    target="_blank"
                    className="size-16"
                >
                    {t('task.content.textLink')}
                </Link>
                {t('task.synthesis.more')}
            </Indent>
            <Text strong className="size-20">
                {t('task.content.subTitle5')}
            </Text>
            <Indent>{t('task.synthesis.text3')}</Indent>
            <p className="text_center table_footer">{t('task.synthesis.tableTitle2')}</p>
            <div className="table_center">
                <Table
                    pagination={false}
                    dataSource={inverseResultData}
                    columns={[
                        {
                            title: 'Model/Method',
                            dataIndex: 'model',
                            render: (v, item) => (
                                <Tag
                                    color="green"
                                    style={{
                                        cursor: item?.url ? 'pointer' : 'default',
                                        textDecoration: item?.url ? 'underline #b7eb8f' : 'none',
                                        fontWeight: item?.bold ? 700 : 'normal',
                                    }}
                                    onClick={() => {
                                        if (item.url) {
                                            const w = window.open('', '_blank');
                                            (w as Window).location = item.url;
                                        }
                                    }}
                                >
                                    {v}
                                </Tag>
                            ),
                        },
                        {
                            title: 'Description',
                            dataIndex: 'description',
                            render: v => <Tag color="cyan">{v}</Tag>,
                        },
                        {
                            title: 'Top1(Acc)',
                            dataIndex: 'top1',

                            render: (v, item) => (
                                <Tag
                                    color="blue"
                                    style={{
                                        fontWeight: item?.bold ? 700 : 'normal',
                                    }}
                                >
                                    {v}
                                </Tag>
                            ),
                        },
                        {
                            title: 'Top3(Acc)',
                            dataIndex: 'top3',

                            render: v => <Tag color="gold">{v}</Tag>,
                        },
                    ]}
                    footer={() => (
                        <p
                            style={{
                                width: '700px',
                                fontWeight: 500,
                            }}
                        >
                            {t('task.inverse.tableFooter')}
                        </p>
                    )}
                />
            </div>
        </Typography>
    );
};
export default Inverse;
