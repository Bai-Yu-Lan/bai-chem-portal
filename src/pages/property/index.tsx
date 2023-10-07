/* eslint-disable react/no-unescaped-entities */
import React, {FC} from 'react';
import {Typography, Table, Tooltip, Tag} from 'antd';
import {Indent} from '@/constants/style-components';
import {propertyData} from '@/constants';
import {useTranslation} from 'react-i18next';

const {Text, Link} = Typography;

const Reaction: FC = () => {
    const {t} = useTranslation();
    return (
        <Typography className="size-16">
            <div className="margin-t-32">
                <Text strong className="size-20">
                    {t('task.reaction.title1')}
                </Text>
            </div>
            <Indent>
                {t('task.attribute.text1')}
                {t('task.attribute.text2')}
            </Indent>
            <Text strong className="size-20">
                {t('task.reaction.title2')}
            </Text>
            <Indent>
                {t('task.attribute.ftext')}
                <Link
                    target="_blank"
                    href="https://github.com/ChemFoundationModels/ChemLLMBench/tree/main/data"
                    className="size-16"
                >
                    {t('task.content.textLink')}
                </Link>
                {t('task.attribute.text3')}
            </Indent>
            <p className="text_center table_footer">{t('task.attribute.tableTitle1')}</p>
            <div className="table_center margin-b-16">
                <Table
                    columns={[
                        {
                            title: 'SMILES',
                            dataIndex: 'smiles',
                            ellipsis: true,
                            render: v => (
                                <Tag
                                    color="green"
                                    style={{
                                        maxWidth: '95%',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <Tooltip title={v}>{v}</Tooltip>
                                </Tag>
                            ),
                        },
                        {
                            title: 'activity',
                            dataIndex: 'activity',
                            width: 100,
                            render: v => <Tag color="processing">{v}</Tag>,
                        },
                        {
                            title: 'HIV active',
                            dataIndex: 'HIV_activity',
                            width: 150,
                            render: v => <Tag color="warning">{v}</Tag>,
                        },
                    ]}
                    dataSource={propertyData}
                    pagination={false}
                    footer={() => (
                        <p style={{width: 700, fontWeight: 500}}>
                            {t('task.attribute.tableResult')}
                        </p>
                    )}
                />
            </div>
            <Text strong className="size-18">
                {t('task.content.subTitle5')}
            </Text>
            <Indent>{t('task.attribute.text4')}</Indent>

            <p className="text_center table_footer">{t('task.attribute.tableTitle2')}</p>
            <div className="table_center">
                <Table
                    dataSource={[
                        {
                            type: 'BAI-Chem(v1)',
                            acc: '86%',
                            f1: '46.15%',
                        },
                        {
                            type: 'GPT-4',
                            acc: '85.1%',
                            f1: '87%',
                        },
                    ]}
                    columns={[
                        {
                            dataIndex: 'type',
                            title: ' ',
                            render: v => <Tag color="green">{v}</Tag>,
                        },
                        {
                            dataIndex: 'acc',
                            title: 'Acc',
                            render: v => <Tag color="blue">{v}</Tag>,
                        },
                        {
                            dataIndex: 'f1',
                            title: 'F1-Score',
                            render: v => <Tag color="gold">{v}</Tag>,
                        },
                        {
                            dataIndex: 'remark',
                            title: '备注',
                        },
                    ]}
                    pagination={false}
                />
            </div>
        </Typography>
    );
};
export default Reaction;
