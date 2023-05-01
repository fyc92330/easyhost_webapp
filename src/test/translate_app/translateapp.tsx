import React, { useState } from 'react';
import Field  from './field';
import Languages from "./languages";
import Translate from "./translate";
import './translate.css'

export default function TranslateApp() {
    const [language, setLanguage] = useState('es');
    const [text, setText] = useState('');
    const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
        console.log('輸入value: ' + event.target.value);
    }
    return (
        <div className="wrapper">
            <div>
                <Field value={text} onChange={textChangeHandler} />
                <Languages  language={language} onLanguageChange={setLanguage} />
                <hr />
                <Translate  language={language} text={text} />
            </div>
        </div>
    );
}
