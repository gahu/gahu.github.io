import React, { Component } from 'react'
import styles from './EditorPane.scss'
import classNames from 'classnames/bind'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

let CodeMirror = null;
const isBrowser = process.env.App_ENV === 'browser';
if(isBrowser) {
    CodeMirror = require('codemirror');
    require('codemirror/mode/markdown/markdown')
    require('codemirror/mode/javascript/javascript');
    require('codemirror/mode/jsx/jsx');
    require('codemirror/mode/css/css');
    require('codemirror/mode/shell/shell');
}

const cx = classNames.bind(styles);

class EditorPane extends Component {
    editor = null
    codeMirror = null
    cursor = null

    initializeEditor = () => {
        this.codeMirror = CodeMirror(this.editor, {
            mode: 'markdown',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true
        });
        this.codeMirror.on('chage', this.handleChangeMarkdown);
    }

    componentDidMount() {
        this.initializeEditor();
    }

    handleChange = (e) => {
        const { onChangeInput } = this.props;
        const { value, name } = e.target;
        onChangeInput({name, value});
    }

    handleChangeMarkdown = (doc) => {
        const { onChangeInput } = this.props;
        this.cursor = doc.getCursor();
        onChangeInput({
            name: 'markdown',
            value: doc.getValue()
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.markdown !== this.props.markdown) {
            const { codeMirror, cursor } = this;
            if(!codeMirror) return; // 인스턴스를 아직 만들기 않았을 때
            codeMirror.setValue(this.props.markdown);
            if(!cursor) return; // 커서가 없을 때
            codeMirror.setCursor(cursor);
        }
    }

    render() {
        const { handleChange } = this;
        const { tags, title } = thie.props;

        return (
            <div className={cx('editor-pane')}>
                <input
                    className={cx('title')}
                    placeholder="제목"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                <div className={cx('code-editor')} ref={ref => this.editor=ref}></div>
                <div className={cx('tags')}>
                    <div className={cx('description')}>tags</div>
                    <input
                        name="tags"
                        placeholder="태그 입력 (쉼표로 구분)"
                        value={tags}
                        onChange={handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default EditorPane;