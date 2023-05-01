import React, { useEffect, useState } from "react";
import axios, {CancelToken} from "axios";
import {TranslateType} from "./interfaces";

function Translate({ language, text }: TranslateType) {
    const [translated] = useTranslation(text, language);

    return (
        <div className="translate">
            <label className="label">Output</label>
            {/*<h1 className="title">{translated.replace("&#39;", "'")}</h1>*/}
            <h1 className="title">{translated}</h1>
        </div>
    );
}

const useTranslation = (text: string, language: string) => {
    const [translated, setTranslated] = useState('');

    useEffect(() => {
        if (!text) {
            return;
        }

        const cancelToken = axios.CancelToken.source();

        doTranslation(text, language, cancelToken, setTranslated);

        return () => {
            try {
                cancelToken.cancel();
            } catch (err) {}
        };
    }, [text, language]);

    console.log('轉換後: ' + translated);

    return [translated];
};

const debounce = (fn: Function) => {
    let id: NodeJS.Timeout | null = null;

    return (...args: any[]) => {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            fn(...args);
            id = null;
        }, 300);
    };
};

const doTranslation = debounce(
    async (input: string, languageCode: string, cancelToken: CancelToken, callback: (value: string) => void) => {
        // try {
        //     const cancelToken = axios.CancelToken.source();
        //     // https://translate.google.com/?sl=en&tl=zh-TW&text=economy&op=translate
        //     const { data } = await axios.post(
        //         "https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA",
        //         {
        //             q: input,
        //             target: languageCode
        //         },
        //         { cancelToken: cancelToken.token }
        //     );
        //
        //     callback(data.data.translations[0].translatedText);
        // } catch (err) {
        //     callback("");
        // }

        try {
            const cancelToken = axios.CancelToken.source();
            const apiKey = "6801914d0eec99af24e48c870378959fe32a2060";
            const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

            const data = {
                q: input,
                target: languageCode
            }
            const apiOptions = {
                method: "POST",
                body: JSON.stringify(data),
                header: {
                    "Content-Type": "application/json"
                }
            }
            const request = new Request(url, apiOptions);
            fetch(request)
                .then(response => response.json())
                .then(responseJson => responseJson.data.transactions[0].translatedText)
                .then(translatedText => callback(translatedText))
                .catch(err => console.log(err));
        }
         catch (err){
            callback("")
        }
    }
);

export default Translate;
