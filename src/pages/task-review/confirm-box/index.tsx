import React, {FC, useEffect, useState} from 'react';

import {Button, Input, Select, Typography} from 'antd';
import styles from './index.module.less';
import cdnlogo from '@/assets/svg/cdnlogo.svg';
import logo2 from '@/assets/images/logo_2.png';
import shuffle from '@/assets/svg/shuffle.svg';
import {TASKLIST, QUESTION_LIST} from '@/constants';

const {Paragraph, Text} = Typography;

const ConfirmBox: FC = () => {
    const [question, setQuestion] = useState('');
    const [selectValue, setSelectValue] = useState(
        'List some methods to synthesize _____[SMILES]?'
    );
    useEffect(() => {
        const ele = document.querySelector('#select');
        if (ele) {
            if (ele?.parentElement?.nextElementSibling) {
                // bca-disable-line
                ele.parentElement.nextElementSibling.innerHTML = 'Q2:' + selectValue;
            }
        }
    }, [selectValue]);

    return (
        <div className={styles.confirm_box}>
            <div className={styles.confirm_select}>
                <Paragraph
                    style={{gridColumnStart: 1, gridColumnEnd: 1, gridRowStart: 1, gridRowEnd: 1}}
                >
                    <Text strong>Task Catagory</Text>
                </Paragraph>
                <Paragraph
                    style={{
                        gridColumnStart: 2,
                        gridColumnEnd: 2,
                        gridRowStart: 1,
                        gridRowEnd: 1,
                        marginLeft: '16px',
                    }}
                >
                    <Text strong>Question</Text>
                </Paragraph>
                <Select
                    style={{
                        gridColumnStart: 1,
                        gridColumnEnd: 2,
                        gridRowStart: 2,
                        gridRowEnd: 2,
                        width: '180px',
                    }}
                    options={TASKLIST}
                    defaultValue={TASKLIST[2].value}
                ></Select>
                <Select
                    style={{
                        gridColumnStart: 2,
                        gridColumnEnd: 6,
                        gridRowStart: 2,
                        gridRowEnd: 4,
                        marginLeft: '16px',
                    }}
                    id="select"
                    popupMatchSelectWidth={540}
                    onSelect={value => {
                        setSelectValue(value);
                    }}
                    options={QUESTION_LIST}
                    defaultValue={QUESTION_LIST[1].value}
                ></Select>
                <Button
                    type="primary"
                    style={{
                        gridColumnStart: 6,
                        gridColumnEnd: 6,
                        gridRowStart: 2,
                        gridRowEnd: 2,
                        marginLeft: '16px',
                    }}
                    onClick={() => {
                        setQuestion(selectValue);
                    }}
                >
                    Confirm
                </Button>
            </div>
            <div className={styles.confirm_image}>
                <div>
                    <img src={cdnlogo} />
                </div>
                <img src={shuffle} />
                <div>
                    <img src={logo2} />
                </div>
            </div>
            <Input prefix={'Question:'} readOnly value={question} />
        </div>
    );
};

export default ConfirmBox;
