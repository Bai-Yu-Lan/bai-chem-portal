import React, {FC, useMemo} from 'react';
import {TASK_MENULIST} from '@/constants';
import styles from './index.module.less';
import polygon from '@/assets/svg/polygon.svg';
import {useLocation, useNavigate} from 'react-router';
import {useTranslation} from 'react-i18next';

const Menu: FC = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const handleClick = (item: {path: string}) => {
        navigate(item.path);
    };
    const subTitle = useMemo(() => t('task.menu.subTitle'), [t]);

    return (
        <div className={styles.menu}>
            <p
                onClick={() => {
                    navigate('/task');
                }}
                style={{cursor: 'pointer'}}
            >
                {t('task.menu.taskList')}
            </p>
            <ul>
                {TASK_MENULIST.map((i, index) => {
                    return (
                        <li
                            key={i.title}
                            onClick={() => handleClick(i)}
                            style={{
                                color: pathname.includes(i.path) ? '#59a7ff' : '#000',
                                lineHeight: index === 4 ? '22px' : '40px',
                                height: index === 4 ? '70px' : '40px',
                            }}
                        >
                            <span>
                                <span style={{textAlign: 'center', display: 'block'}}>
                                    {t(i.title)}
                                </span>
                                {index === 4 && (
                                    <span style={{textAlign: 'center', display: 'block'}}>
                                        {subTitle}
                                    </span>
                                )}
                            </span>
                            {pathname.includes(i.path) && <img src={polygon} />}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Menu;
