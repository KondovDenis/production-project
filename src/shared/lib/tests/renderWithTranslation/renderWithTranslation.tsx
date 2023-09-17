import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";
import React from "react";
import i18nForTests from '../../../config/i18n/i18nForTest'
import {BrowserRouter} from 'react-router-dom';


export function renderWithTranslation(component:ReactNode){
    return render (
    <BrowserRouter>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </BrowserRouter>
    )
}
