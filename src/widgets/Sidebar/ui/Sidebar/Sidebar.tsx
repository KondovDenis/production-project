import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { FC, useMemo, useState } from 'react';
import { ThemeSwitcher } from '../../../../shared/ui/ThemeSwitcher';
import { LangSwitcher } from '../../../LangSwitcher';
import { Button, ButtonSize } from '../../../../shared/ui/Button/Button';
import React from 'react';
import { Theme } from "../../../../app/providers/ThemeProvider/lib/ThemeContext";
import MenuLight from "../Sidebar/assets/icons/menu_light.svg"
import MenuDark from "../Sidebar/assets/icons/menu_dark.svg"
import { useTheme } from '../../../../app/providers/ThemeProvider';
import { ThemeButton } from '../../../../shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from "../../../../shared/ui/AppLink/AppLink";
import {RoutePath} from '../../../../shared/config/routeConfig/routeConfig'
import MainIcon from '../../../../shared/assets/icons/main-20-20.svg'
import { SidebarItemType, SidebarItemsList } from './model/item';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { memo } from 'react';



interface SidebarProps  {
    className?: string;
}




export const Sidebar: FC<SidebarProps> = memo(({className}:SidebarProps) => {

    const {t} = useTranslation('navbar')
    const {theme, toggleTheme} = useTheme()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    const itemsList = useMemo(()=>SidebarItemsList.map((item: SidebarItemType) =>
    	<SidebarItem item={item} collapsed={collapsed} key={item.path}></SidebarItem>	

    ), [collapsed])

    return(
	<div data-testid='sidebar' className={classNames(cls.Sidebar,{ [cls.collapsed]:collapsed },[className])}>
        <Button theme= {ThemeButton.CLEAR} data-testid='sidebar-toggle' className = {cls.collapseBtn} onClick={onToggle} size={ButtonSize.XL}>{theme == Theme.DARK?<MenuLight/>:<MenuDark/>}</Button>
        <div className={cls.items}>
	 {itemsList} 
	</div>
	<div className={cls.switchers}>
            <ThemeSwitcher></ThemeSwitcher>
            <LangSwitcher className={cls.lang}></LangSwitcher>
        </div>
	</div>
        )
})
