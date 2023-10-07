import React, {FC} from 'react';
import {Table, Tag, Typography} from 'antd';
import {Indent} from '@/constants/style-components';
import {reactData} from '@/constants';
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
            <Indent>{t('task.reaction.text1')}</Indent>

            <Text strong className="size-20">
                {t('task.reaction.title2')}
            </Text>
            <Indent>
                {t('task.reaction.text2')}
                <Link
                    href="https://github.com/ChemFoundationModels/ChemLLMBench/tree/main/data"
                    target="_blank"
                    className="size-16"
                >
                    {' '}{t('task.content.textLink')}{' '}
                </Link>
                {t('task.reaction.mare')}
            </Indent>
            <Text strong className="size-20">
                {t('task.content.subTitle5')}
            </Text>
            <Indent>
                <span>{t('task.reaction.text3')}</span>
            </Indent>

            <p className="text_center table_footer">{t('task.reaction.tableTitle')}</p>
            <div className="table_center margin-b-16">
                <Table
                    columns={[
                        {
                            title: 'Model/Methond',
                            dataIndex: 'model',
                            render: (v, item) => (
                                <Tag
                                    color="green"
                                    style={{
                                        cursor: item?.url ? 'pointer' : 'default',
                                        textDecoration: item?.url ? 'underline #b7eb8f' : 'none',
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
                            title: 'Top-1 (Acc)',
                            dataIndex: 'top1',
                            render: v => <Tag color="blue">{v}</Tag>,
                        },
                        {
                            title: 'Top-5 (Acc)',
                            dataIndex: 'top5',
                            render: v => <Tag color="gold">{v}</Tag>,
                        },
                    ]}
                    dataSource={reactData}
                    pagination={false}
                    footer={() => (
                        <p
                            style={{
                                width: '700px',
                                fontWeight: 500,
                            }}
                        >
                            {t('task.reaction.tableFooter')}
                        </p>
                    )}
                />
            </div>
        </Typography>
    );
};
export default Reaction;
