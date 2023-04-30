import React from "react";

export interface FieldType {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface LanguagesType {
    language: string;
    onLanguageChange: (value: string) => void;
}

export interface TranslateType {
    language: string;
    text: string;
}
