import React, {FC} from 'react';
import {Typography} from 'antd';
const {Link, Paragraph, Text} = Typography;
import {P} from '@/constants/index';
import Banner from '@/components/banner';
import {useTranslation, Trans} from 'react-i18next';
import styles from './index.module.less';
import xuyanyan from '@/assets/images/xuyanyan.png';
import logo1 from '@/assets/svg/logo1.svg';
import logo2 from '@/assets/svg/logo2.svg';
import logo3 from '@/assets/svg/logo3.svg';
import logo4 from '@/assets/svg/logo4.svg';
import logo5 from '@/assets/svg/logo5.svg';
import logo6 from '@/assets/svg/logo6.svg';
import jinhuiyao from '@/assets/images/jinhuiyao.png';
import yangxiaokang from '@/assets/images/yangxiaokang.png';
import tianjidong from '@/assets/images/tianjidong.png';
import zhangyu from '@/assets/images/zhangyu.png';
import yumengdi from '@/assets/images/yumengdi.png';
import zengkaipeng from '@/assets/images/zengkaipeng.png';
import zhangzhimin from '@/assets/images/zhangzhimin.png';
import yezengyu from '@/assets/images/yezengyu.png';

const Home: FC = () => {
    const {t} = useTranslation();

    return (
        <Typography className="size-16">
            <Banner title={t('header.down.problem')} titleHidden={true} half={true} />
            <div id="content" className="margin-t-24">
                <P>
                    <Paragraph className="size-16" style={{marginBottom: 0}}>
                        <Text strong className="size-18">
                            {t('about.title')}
                        </Text>
                        <p>
                            <Trans t={t} i18nKey={'about.text'} style={{fontSize: '16px'}}>
                                <Link
                                    href="https://github.com/facebookresearch/llama/blob/main/MODEL_CARD.md"
                                    target="_blank"
                                    className="size-16"
                                >
                                    text
                                </Link>
                                <Link
                                    href="https://openai.com/policies/terms-of-use"
                                    target="_blank"
                                    className="size-16"
                                >
                                    text
                                </Link>
                                <Link
                                    href="https://chrome.google.com/webstore/detail/sharegpt-share-your-chatg/daiacboceoaocpibfodeljbdfacokfjb"
                                    target="_blank"
                                    className="size-16"
                                >
                                    text
                                </Link>
                            </Trans>
                        </p>
                    </Paragraph>

                    <Paragraph className="size-16" style={{marginBottom: 0}}>
                        <Text strong className="size-18">
                            {t('about.team')}
                        </Text>
                        <div className={styles.flex_container}>
                            <p
                                className={styles.about_team_text}
                                // style={{width: lang === 'cn' ? '200px' : '350px'}}
                            >
                                {t('about.team.title1')}
                            </p>
                            <div className={styles.flex_image}>
                                <div>
                                    <img src={xuyanyan} />
                                    <p>{t('about.team.name1')}</p>
                                    <p>{t('about.team.place1')}</p>
                                </div>
                                <div>
                                    <img src={jinhuiyao} />
                                    <p>{t('about.team.name2')}</p>
                                    <p>{t('about.team.place1')}</p>
                                    <p>{t('about.team.place2')}</p>
                                </div>
                                <div>
                                    <img src={yangxiaokang} />
                                    <p>{t('about.team.name3')}</p>
                                    <p>{t('about.team.place1')}</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles.flex_container}
                            style={{marginTop: '32px', marginBottom: '12px'}}
                        >
                            <p className={styles.about_team_text}>{t('about.team.title2')}</p>
                            <div className={styles.flex_image}>
                                <div>
                                    <img src={tianjidong} />
                                    <p>{t('about.team.name4')}</p>
                                    <p>{t('about.team.place1')}</p>
                                    <p className={styles.p_italic}>{t('about.team.des1')}</p>
                                </div>
                                <div>
                                    <img src={zhangyu} />
                                    <p>{t('about.team.name5')}</p>
                                    <p>{t('about.team.place1')}</p>
                                    <p className={styles.p_italic}>{t('about.team.des2')}</p>
                                </div>
                                <div>
                                    <img src={yumengdi} />
                                    <p>{t('about.team.name6')}</p>
                                    <p>{t('about.team.place1')}</p>
                                    <p className={styles.p_italic}>{t('about.team.des1')}</p>
                                </div>
                                <div>
                                    <img src={zengkaipeng} />
                                    <p>{t('about.team.name7')}</p>
                                    <p>{t('about.team.place1')}</p>
                                    <p className={styles.p_italic}>{t('about.team.des1')}</p>
                                </div>
                                <div>
                                    <img src={zhangzhimin} />
                                    <p>{t('about.team.name8')}</p>
                                    <p>{t('about.team.place3')}</p>
                                    <p className={styles.p_italic}>{t('about.team.des2')}</p>
                                </div>
                                <div>
                                    <img src={yezengyu} />
                                    <p>{t('about.team.name9')}</p>
                                    <p>{t('about.team.place1')}</p>
                                    <p className={styles.p_italic}>{t('about.team.des1')}</p>
                                </div>
                            </div>
                        </div>
                    </Paragraph>

                    <Paragraph className="size-16" style={{marginBottom: 0}}>
                        <Text strong className="size-18">
                            {t('about.team.title3')}
                        </Text>
                        <p>{t('about.team.text')} </p>
                    </Paragraph>
                    <div className={styles.flex_footer}>
                        <div style={{display: 'flex'}}>
                            <img src={logo1} />
                            <img src={logo2} />
                        </div>
                        <img src={logo3} />
                        <img src={logo4} />
                        <img src={logo5} style={{width: '100px'}} />
                        <img src={logo6} style={{width: '100px'}} />
                    </div>
                </P>
            </div>
        </Typography>
    );
};

export default Home;
