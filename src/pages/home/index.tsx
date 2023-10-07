import React, {FC} from 'react';
import home1 from '@/assets/svg/home1.svg';
import home2 from '@/assets/svg/home2.svg';
import gif1 from '@/assets/images/home_gif.gif';
import gif2 from '@/assets/images/home_gif2.gif';
import {Typography} from 'antd';
import Banner from '@/components/banner';
import styles from './index.module.less';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import {useTranslation} from 'react-i18next';
import home1_en from '@/assets/svg/home1_en.svg';
import home2_cn from '@/assets/svg/home2_cn.svg';

const Home: FC = () => {
    const {t} = useTranslation();
    return (
        <Typography>
            <Banner
                title={t('home.banner.title2')}
                subTitle={t('home.banner.content')}
                titleHidden={localStorage.getItem('lang') === 'en' && true}
                isHome={true}
            />
            <div id="content" style={{textAlign: 'left'}}>
                <div className={styles.flex}>
                    <div className={styles.text}>
                        <ScrollAnimation
                            animateIn="animate__fadeIn"
                            duration={1}
                            animateOnce={true}
                        >
                            <p className="size-18">{t('home.content.title1')}</p>
                            <span className="size-16">{t('home.content.leftText1')}</span>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation
                        animateIn="animate__fadeIn"
                        duration={1}
                        className={styles.img}
                        animateOnce={true}
                    >
                        <img
                            src={localStorage.getItem('lang') === 'cn' ? home1 : home1_en}
                            style={{height: '100%'}}
                        />
                    </ScrollAnimation>
                </div>
                <div className={styles.flex}>
                    <ScrollAnimation
                        className={styles.img}
                        animateIn="animate__fadeIn"
                        duration={1}
                        animatePreScroll={false}
                        animateOnce={true}
                    >
                        <img
                            src={localStorage.getItem('lang') === 'cn' ? home2_cn : home2}
                            style={{height: '100%'}}
                        />
                    </ScrollAnimation>
                    <div className={styles.text}>
                        <ScrollAnimation
                            animateIn="animate__fadeIn"
                            duration={1}
                            animatePreScroll={false}
                            animateOnce={true}
                        >
                            <p className="size-18">{t('home.content.rightTitle')}</p>
                            <Typography>
                                <ul>
                                    <li className="size-16">{t('home.content.rightText1')}</li>
                                    <li className="size-16">{t('home.content.rightText2')}</li>
                                </ul>
                            </Typography>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.text}>
                        <ScrollAnimation
                            animateIn="animate__fadeIn"
                            animateOnce={true}
                            duration={1}
                            animatePreScroll={false}
                        >
                            <p className="size-18"> {t('home.content.leftTitle1')}</p>
                            <Typography>
                                <ul>
                                    <li className="size-16">
                                        {t('home.content.leftText2')}
                                        {/* <span>整合大量的化学文献、物质信息和反应数据库，</span>
                                        <span>BAI-Chem</span>
                                        <span>提供可靠、权威及可使用的信息，</span>
                                        <span>可从海量数据中迅速找到所需的知识和资料。</span> */}
                                    </li>
                                    <li className="size-16">{t('home.content.leftText3')}</li>
                                    <li className="size-16">{t('home.content.leftText4')}</li>
                                </ul>
                            </Typography>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation
                        animateIn="animate__fadeIn"
                        duration={1}
                        animateOnce={true}
                        animatePreScroll={false}
                        className={styles.img}
                    >
                        <img src={gif1} style={{width: '100%'}} />
                    </ScrollAnimation>
                </div>
                <div className={styles.flex}>
                    <ScrollAnimation
                        className={styles.img}
                        animateIn="animate__fadeIn"
                        duration={1}
                        animateOnce={true}
                        animatePreScroll={false}
                    >
                        <img src={gif2} style={{width: '100%'}} />
                    </ScrollAnimation>
                    <div className={styles.text}>
                        <ScrollAnimation
                            animateIn="animate__fadeIn"
                            duration={1}
                            animateOnce={true}
                            animatePreScroll={false}
                        >
                            <p className="size-18">{t('home.content.rightTtile2')}</p>
                            <Typography>
                                <ul>
                                    <li className="size-16">
                                        {t('home.content.rightText3')}
                                        {/* <span>
                                            化学聊天机器人具备博士生水平回答基础化学知识问题，
                                        </span>
                                        <span>
                                            如查询分子的SMILES序列、化学元素的基本性质、化学反应类型和化学常识等。
                                        </span> */}
                                    </li>
                                    <li className="size-16">
                                        {t('home.content.rightText4')}
                                        {/* <span>支持多种任务问答，涵盖分子生成、分子属性预测、</span>
                                        <span>合成路线规划、反应条件生成、反应预测、</span>
                                        <span>
                                            自动检索、基础化学知识等简单和复合任务。满足科研人员在化学领域的多样化需求，提供全方位支持和指导。
                                        </span> */}
                                    </li>
                                </ul>
                            </Typography>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </Typography>
    );
};

export default Home;
