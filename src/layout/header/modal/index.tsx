import {Button, Modal} from 'antd';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './index.module.less';

interface ConnectModalProps {
    open: boolean;
    setFalse: () => void;
}

const ConnectModal: FC<ConnectModalProps> = ({open, setFalse}) => {
    const {t} = useTranslation();
    return (
        <Modal
            open={open}
            onCancel={() => setFalse()}
            closeIcon={null}
            footer={
                <div className={styles.modal_footer}>
                    <Button key={'cancel'} onClick={() => setFalse()} type="primary">
                        {t('contactUs.button')}
                    </Button>
                </div>
            }
            width={800}
        >
            <div className={styles.modal}>
                <h3 className="margin-b-12">
                    {t('contactUs.text')}
                </h3>
                <p>{t('contactUs.name')}</p>
                <p>{t('contactUs.email')}</p>
                <p>{t('ontactUs.theme')}</p>
                <p>{t('contactUs.content')}</p>
            </div>
        </Modal>
    );
};
export default ConnectModal;
