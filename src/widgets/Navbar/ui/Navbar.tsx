import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "../../../shared/ui/ThemeSwitcher";
import { useTranslation } from 'react-i18next';
import {RoutePath} from '../../../shared/config/routeConfig/routeConfig';




interface NavbarProps {
    className?: string
}

export const Navbar = ({className}:NavbarProps) => {
    
    const {t} = useTranslation('navbar')
    
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme = {AppLinkTheme.PRIMARY} to={RoutePath.about} className={cls.aboutLink}>{t('О сайте')}</AppLink>
            </div>
        </div>
    )
}
