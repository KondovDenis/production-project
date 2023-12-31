import React from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from "../../../../app/providers/ThemeProvider";
import LightIcon from '../../../../shared/ui/ThemeSwitcher/ui/assets/icons/theme-light.svg';
import DarkIcon from '../../../../shared/ui/ThemeSwitcher/ui/assets/icons/theme-dark.svg';
import { Theme } from "../../../../app/providers/ThemeProvider/lib/ThemeContext";
import { Button, ThemeButton } from "../../Button/Button";
import { memo } from "react";



interface ThemeSwitcherProps  {
    className?: string;
}


export const ThemeSwitcher = memo(({className}:ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme()

    return(
            <Button theme= {ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
                {theme == Theme.DARK?<LightIcon/>:<DarkIcon/>}
            </Button>
        )
})
