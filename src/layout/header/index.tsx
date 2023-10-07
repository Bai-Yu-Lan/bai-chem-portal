import React, {FC, useEffect} from 'react';
import {Layout, Select} from 'antd';
import styles from './index.module.less';
import logo from '@/assets/svg/logo.svg';
import {Image, LanguageOption} from '@/constants';
import {useBoolean} from 'ahooks';
import menu_svg from '@/assets/svg/menu.svg';
import MenuList from './menu-list';
import i18n from '@/i18n/index';
import {useTranslation} from 'react-i18next';

const {Header: AntHeader} = Layout;

const Header: FC = () => {
    const [openMenu, {setTrue: setShow, setFalse: setHidden}] = useBoolean(true);
    const {t} = useTranslation();

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        i18n.changeLanguage(lang || 'cn');
    }, []);

    const handleClickMenu = () => {
        setShow();
    };

    const handleChange = (value: string) => {
        localStorage.setItem('lang', value);
        i18n.changeLanguage(value || 'cn');
    };
    return (
        <AntHeader className={styles.header}>
            <Image src={logo} style={{color: '#fff', zIndex: 2}} />
            <div className={styles.header_right} onClick={handleClickMenu}>
                <span>{t('header.menu')}</span>
                <img src={menu_svg} />
            </div>
            <div className={styles.header_right_lang}>
                <Select
                    value={localStorage.getItem('lang') || 'cn'}
                    onChange={handleChange}
                    options={LanguageOption}
                />
            </div>
            <MenuList open={openMenu} setFalse={setHidden} />
        </AntHeader>
    );
};

export default Header;
