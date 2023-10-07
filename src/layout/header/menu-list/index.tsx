/* eslint-disable operator-linebreak */
import {Button, Drawer} from 'antd';
import React, {FC, useState} from 'react';
import close from '@/assets/svg/close.svg';
import styles from './index.module.less';
import ConnectModal from '../modal';
import {useBoolean} from 'ahooks';
import {MENULIST} from '@/constants';
import {cloneDeep} from 'lodash';
import {useNavigate} from 'react-router';
import {useTranslation} from 'react-i18next';

type Item = (typeof MENULIST)[0] & {
    children?: typeof MENULIST;
    expand?: boolean;
    classname?: string;
};

interface Props {
    open: boolean;
    setFalse: () => void;
}
const MenuList: FC<Props> = ({open, setFalse}) => {
    const [openModal, {setTrue, setFalse: setHidden}] = useBoolean();
    const navigate = useNavigate();
    const [menuList, setMenuList] = useState<Item[]>(MENULIST);
    const {t} = useTranslation();

    const handleClick = (item: Item, index?: number) => {
        if (item.children) {
            const data = cloneDeep(menuList);
            data[index as number] = {
                ...item,
                expand: !item.expand,
                classname: !item.expand ? 'expand' : 'collapse',
            };
            setMenuList(data);
        } else {
            if (item.key === '/home') {
                navigate('/');
                setFalse();
                return;
            }
            if (item.key.includes('//')) {
                return window.open(item.key);
            }
            setFalse();
            navigate(item.key);
        }
    };
    return (
        <Drawer
            open={open}
            closeIcon={null}
            onClose={() => setFalse()}
            headerStyle={{border: 'none'}}
            style={{background: '#0057B9'}}
            extra={<img src={close} className={styles.img} onClick={() => setFalse()} />}
            className={styles.drawer}
            destroyOnClose={true}
        >
            <ul className={styles.menu_list}>
                {menuList.map((item, index) => (
                    <li key={item.key}>
                        <div>
                            <span onClick={() => handleClick(item, index)}>{t(item.label)}</span>
                        </div>
                        {item.children &&
                            item.children.map(e => (
                                <p
                                    key={t(e.label)}
                                    className={styles[item?.classname as string]}
                                    onClick={() => handleClick(e)}
                                >
                                    {t(e.label)}
                                </p>
                            ))}
                    </li>
                ))}
            </ul>
            <Button
                onClick={() => {
                    setTrue();
                }}
                className={styles.button}
            >
                {t('header.down.contactUs')}
            </Button>
            <ConnectModal open={openModal} setFalse={setHidden} />
        </Drawer>
    );
};

export default MenuList;
