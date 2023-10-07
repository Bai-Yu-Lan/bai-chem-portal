/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, {FC} from 'react';
import {Table, Tag, Tooltip, Typography} from 'antd';
import {Indent} from '@/constants/style-components';
import {conditionData} from '@/constants';
import {useTranslation} from 'react-i18next';
import styles from './index.module.less';

const {Paragraph, Text} = Typography;

const Conditional: FC = () => {
    const {t} = useTranslation();
    return (
        <Typography className="size-16">
            <div className="margin-t-32">
                <Text strong className="size-20">
                    {t('task.reaction.title1')}
                </Text>
            </div>
            <Indent style={{marginBottom: 0}}>{t('task.conditions.text1')}</Indent>
            <Paragraph className="size-16">
                <ul>
                    <li>What reagent is used For this reaction?</li>
                    <li>What catalyst is used for this reaction?</li>
                    <li>
                        According to experimental procedure and condition of this reaction:{' '}
                        {'Conditions'}, please calculate the yield of products of reaction."
                    </li>
                    <li>Please give me the experimental procedure and condition of reaction? </li>
                </ul>
            </Paragraph>

            <Text strong className="size-20">
                {t('task.reaction.title2')}
            </Text>
            <Indent>{t('task.conditions.text2')}</Indent>

            <p className="text_center table_footer">{t('task.conditions.tableTitle1')}</p>
            <div className="table_center margin-b-16">
                <table border={1}>
                    <tr>
                        <td className="td_padding">
                            <div className={styles.left_td}>BAI-Chem V2 test dataset</div>
                        </td>
                        <td className="td_padding">
                            <Tooltip
                                overlayInnerStyle={{width: '500px'}}
                                placement="topLeft"
                                title={
                                    <span>
                                        {'{'}“<span style={{color: '#fd0000'}}>INSTRUCTION</span>":
                                        ”Considering A Chemical Reaction, SMILES Is Sequenced-Based
                                        Strings, Used To Encode The Molecular Structure, Reactants
                                        For This Reaction Are CCCCCCCCCCCCCC
                                        CCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1, SMILES For
                                        Products Of Reactions Are
                                        CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O )O)cc1,
                                        So The Whole Reaction Can Be Represented As
                                        CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OC C)CC(=O)OCC)
                                        cc1
                                        {'>'}
                                        CO.[Na+].[OH-]{'>'}CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(
                                        =O)O)CC(=O)O)cc1,{' '}
                                        <span style={{color: '#0279ff'}}>
                                            Based On Your Knowledge, What Reagents Or Catalysts Are
                                            Likely To Be Found In This Chemical Reaction?
                                        </span>
                                        ”, “<span style={{color: '#fd0000'}}>INPUT</span>
                                        ”:”CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O) N(CC(=O)
                                        OCC)CC(=O)OCC)cc1
                                        {'>>'}CCCCCCCCCCCCCCCCCCOc1ccc(C(=O )C(=O)N(CC
                                        (=O)O)CC(=O)O)cc1”, “
                                        <span style={{color: '#fd0000'}}>OUTPUT</span>
                                        ”：“CO.[Na+].[OH-]”，“
                                        <span style={{color: '#fd0000'}}>TYPE</span>
                                        ”，：“Reagents”{'}'}
                                    </span>
                                }
                            >
                                <div className={styles.overflow_td}>
                                    {'{'}“<span style={{color: '#fd0000'}}>INSTRUCTION</span>":
                                    ”Considering A Chemical Reaction, SMILES Is Sequenced-Based
                                    Strings, Used To Encode The Molecular Structure, Reactants For
                                    This Reaction Are CCCCCCCCCCCCCC
                                    CCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1, SMILES For
                                    Products Of Reactions Are
                                    CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O )O)cc1, So
                                    The Whole Reaction Can Be Represented As
                                    CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OC C)CC(=O)OCC) cc1
                                    {'>'}
                                    CO.[Na+].[OH-]{'>'}CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(
                                    =O)O)CC(=O)O)cc1,{' '}
                                    <span style={{color: '#0279ff'}}>
                                        Based On Your Knowledge, What Reagents Or Catalysts Are
                                        Likely To Be Found In This Chemical Reaction?
                                    </span>
                                    ”, “<span style={{color: '#fd0000'}}>INPUT</span>
                                    ”:”CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O) N(CC(=O)
                                    OCC)CC(=O)OCC)cc1
                                    {'>>'}CCCCCCCCCCCCCCCCCCOc1ccc(C(=O )C(=O)N(CC
                                    (=O)O)CC(=O)O)cc1”, “
                                    <span style={{color: '#fd0000'}}>OUTPUT</span>
                                    ”：“CO.[Na+].[OH-]”，“
                                    <span style={{color: '#fd0000'}}>TYPE</span>
                                    ”，：“Reagents”{'}'}
                                </div>
                            </Tooltip>
                        </td>
                    </tr>
                </table>
            </div>
            <Text strong className="size-20">
                {t('task.content.subTitle5')}
            </Text>
            <Indent>{t('task.conditions.text3')}</Indent>

            <p className="text_center table_footer">{t('task.conditions.tableTitle2')}</p>
            <div className="table_center">
                <Table
                    dataSource={conditionData}
                    pagination={false}
                    columns={[
                        {
                            title: 'Task',
                            dataIndex: 'Task',
                            render: v => <Tag color="green">{v}</Tag>,
                            fixed: true,
                        },
                        {
                            title: 'ACC',
                            dataIndex: 'ACC',
                            render: v => <Tag color="cyan">{v}</Tag>,
                        },
                        {
                            title: 'BLEU-2',
                            dataIndex: 'BLEU-2',

                            render: v => <Tag color="blue">{v}</Tag>,
                        },
                        {
                            title: 'BLEU-4',
                            dataIndex: 'BLEU-4',

                            render: v => <Tag color="geekblue">{v}</Tag>,
                        },
                        {
                            title: 'Rouge-1',
                            dataIndex: 'Rouge-1',

                            render: v => <Tag color="orange">{v}</Tag>,
                        },
                        {
                            title: 'Rouge-2',
                            dataIndex: 'Rouge-2',

                            render: v => <Tag color="gold">{v}</Tag>,
                        },
                        {
                            title: 'Rouge-L',
                            dataIndex: 'Rouge-L',

                            render: v => <Tag color="lime">{v}</Tag>,
                        },
                        {
                            title: '备注',
                            dataIndex: 'remark',
                            render: v => <Tag color="volcano">{v}</Tag>,
                        },
                    ]}
                />
            </div>
        </Typography>
    );
};
export default Conditional;
