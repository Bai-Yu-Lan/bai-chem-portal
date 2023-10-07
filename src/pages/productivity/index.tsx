import React, {FC} from 'react';
import {Typography} from 'antd';
import {Indent, Center} from '@/constants/style-components';
import product_img from '@/assets/svg/product_img.svg';
import {useTranslation} from 'react-i18next';

const {Text, Link} = Typography;

const Productivity: FC = () => {
    const {t} = useTranslation();
    return (
        <Typography className="size-16">
            <div className="margin-t-32">
                <Text strong className="size-20">
                    {t('task.reaction.title1')}
                </Text>
            </div>
            <Indent>{t('task.productivity.text1')}</Indent>
            <Text strong className="size-20">
                {t('task.reaction.title2')}
            </Text>
            <Indent>{t('task.productivity.text2')}</Indent>
            <Text strong style={{fontSize: '18px'}}>
                {t('task.content.subTitle5')}
            </Text>
            <Indent>
                <span>{t('task.productivity.text3')}</span>
                <Link
                    href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.1c01467"
                    target="_blank"
                    className="size-16"
                >
                    {t('task.productivity.type1')}
                </Link>{' '}
                {t('task.productivity.and')}{' '}
                <Link
                    href="https://research.ibm.com/publications/prediction-of-chemical-reaction-yields-using-deep-learning"
                    target="_blank"
                    className="size-16"
                >
                    {' '}
                    {t('task.productivity.type2')}{' '}
                </Link>
                <span> {t('task.productivity.more')}</span>
            </Indent>

            <Center>
                <img src={product_img} style={{width: '500px'}} />
            </Center>
            <p className="text_center table_footer">{t('task.productivity.tableTitle1')}</p>
        </Typography>
    );
};
export default Productivity;
