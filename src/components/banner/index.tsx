import React, {FC, useEffect, useState} from 'react';
import styles from './index.module.less';
import arrow from '@/assets/svg/arrow.svg';
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router-dom';

interface BannerProps {
    title: string;
    subTitle?: string;
    titleHidden?: boolean;
    half?: boolean;
    isHome?: boolean;
}

const Banner: FC<BannerProps> = ({
    title = '',
    subTitle = '',
    titleHidden = false,
    half = false,
    isHome = false,
}) => {
    const [newTitle, setNewTitle] = useState(title);
    const {pathname} = useLocation();
    const {t} = useTranslation();
    const handleClick = () => {
        document.querySelector('#content')?.scrollIntoView({behavior: 'smooth'});
    };
    useEffect(() => {
        if (title.includes('—')) {
            const titleList = title.split('—');
            if (pathname === '/task/conditional') {
                setNewTitle(
                    t(titleList[0]) as string
                    + '—'
                    + t(titleList[1]) as string
                    + t('task.menu.subTitle') as string
                );
            } else {
                setNewTitle(
                    t(titleList[0]) as string
                    + '—'
                    + t(titleList[1]) as string
                );
            }
        } else {
            setNewTitle(t(title));
        }
    }, [title, t, pathname]);

    return (
        <div
            className={[styles.banner, isHome && styles.homeBanner, half && styles.half].join(' ')}
            style={{height: half ? '40vh' : 'calc(100vh - 64px)'}}
        >
            {isHome ? (
                <div className={styles.rightContent}>
                    {!titleHidden && <h1>{t('home.banner.title1')}</h1>}
                    <h2>{newTitle}</h2>
                    <p className="size-18">{subTitle}</p>
                </div>
            ) : (
                <>
                    {!titleHidden && <h1>{t('home.banner.title1')}</h1>}
                    <h2>{newTitle}</h2>
                    <p className="size-18">{subTitle}</p>
                </>
            )}
            {!half && (
                <div>
                    <span onClick={handleClick}>{t('home.banner.seeMore')}</span>
                    <img src={arrow} alt={t('home.banner.more')} onClick={handleClick} />
                </div>
            )}
        </div>
    );
};

export default Banner;
