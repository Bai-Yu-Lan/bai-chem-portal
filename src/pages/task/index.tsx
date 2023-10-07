import React, {FC, useMemo} from 'react';
import styles from './index.module.less';
import Menu from './menu';
import {Outlet, useLocation} from 'react-router';
import Banner from '@/components/banner';
import {PathToTitle} from '@/constants';

const Task: FC = () => {
    const {pathname} = useLocation();

    const info = useMemo(() => {
        const p = pathname.split('/');
        return PathToTitle.find(i => i.path === p[p.length - 1]);
    }, [pathname]);

    return (
        <div>
            <Banner title={info?.title || ''} half={true} />
            <div className={styles.task_layout}>
                <Menu />
                <div className={styles.task_content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Task;
