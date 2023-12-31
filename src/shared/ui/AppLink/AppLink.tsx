import React, { ReactNode } from "react";
import { classNames } from "../../lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import { FC } from "react";
import { memo } from "react";

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export const AppLink = memo((props:AppLinkProps) => {

    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props
    console.log(props)

    return(
        <Link to={to} className={classNames(cls.AppLink, { [cls[theme]]: true },  [className])} {...otherProps}>{children}</Link>
        )
})
