import React from 'react'
import styles from './EditorHeader.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = className.bind(styles);

const EditorHeader = ({onGoBack, onSubmit, isEdit}) => {
    return (
        <div className={cx('editor-header')}>
            <div className={cx('back')}>
                <Button onClick={onGoBack} theme="outline">Back</Button>
            </div>
            <div className={cx('submit')}>
                <Button onClick={onSubmit} theme="outline">{isEdit ? 'Edit' : 'submit'}</Button>
            </div>
        </div>
    );
};

export default EditorHeader;