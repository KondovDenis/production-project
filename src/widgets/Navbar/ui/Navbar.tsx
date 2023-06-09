import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "../../../shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme = {AppLinkTheme.PRIMARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink theme = {AppLinkTheme.PRIMARY} to={'/about'} className={cls.aboutLink}>О сайте</AppLink>
            </div>
        </div>
    )
}