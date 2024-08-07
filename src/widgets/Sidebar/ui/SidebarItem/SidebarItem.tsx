import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "../../../../shared/ui/AppLink/AppLink";
import { RoutePath } from "../../../../shared/config/routeConfig/routeConfig";
import MainIcon from "../../../../shared/assets/icons/main-20-20.svg"
import cls from "./Sidebar.module.scss"
import { SidebarItemType } from "../Sidebar/model/item";
import { memo } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "../../../../entities/User";


interface SidebarItemProps{
	item: SidebarItemType
	collapsed: boolean
}




export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {
	const {t} = useTranslation()
	
	const isAuth = useSelector(getUserAuthData)
	
    	if(item.authOnly && !isAuth){
		return null
    	}

	return (
		<AppLink theme = {AppLinkTheme.PRIMARY} to={item.path}  className={classNames(cls.item, {[cls.collapsed]: collapsed})}>
			<item.icon className={cls.icon}></item.icon>
			<span className={cls.link}>{t(item.text)}</span>
		</AppLink>		
	)
})
