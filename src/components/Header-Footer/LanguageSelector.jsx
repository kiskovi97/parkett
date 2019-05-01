import React from 'react';
import styles from './Language.module.css';
import { getLanguage, getLanguageName, setLanguage } from '../../utils/language';
import strings from '../../utils/Descriptions';

class LanguageSelector extends React.Component {
    constructor() {
        super();
        this.state = {
            language: null,
        };
    }

    render() {
        strings.setLanguage(getLanguage());
        return (
            <div>
                <div className={styles.main}>
                    <div className={styles.langName}>
                        {getLanguageName()}
                    </div>
                    <div className={`${styles.lang} ${styles.selected}`}>
                        <span
                            onClick={() => setLanguage('hu')}
                            role="button"
                            onKeyDown={() => { }}
                            tabIndex={0}
                        >
                            {'HU'}
                        </span>
                    </div>
                    <div className={`${styles.lang} ${styles.lang}`}>
                        <span
                            onClick={() => setLanguage('en')}
                            role="button"
                            onKeyDown={() => { }}
                            tabIndex={0}
                        >
                            {'ENG'}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}


export default LanguageSelector;