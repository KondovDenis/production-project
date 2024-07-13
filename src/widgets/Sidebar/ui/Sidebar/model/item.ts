import React from "react";
import { RoutePath } from "../../../../../shared/config/routeConfig/routeConfig";
import MainIcon from "../../../../../shared/assets/icons/main-20-20.svg"
import AboutIcon from "../../../../../shared/assets/icons/about-20-20.svg"
import ProfileIcon from "../../../../../shared/assets/icons/profile-20-20.svg"
import ArticlesIcon from "../../../../../shared/assets/icons/article-20-20.svg"



export interface SidebarItemType{
	path: string;
	icon: React.VFC<React.SVGProps<SVGSVGElement>>;
	text: string;
	authOnly?: boolean 
}



export const SidebarItemsList: SidebarItemType[] = [
	{
	  path: RoutePath.main,
	  icon: MainIcon,
	  text: 'Главная',
	},
	{
	  path: RoutePath.about,
	  icon: AboutIcon,
	  text: 'О сайте',
	},
	{
	  path: RoutePath.profile,
	  icon: ProfileIcon ,
	  text: 'Профиль',
	  authOnly: true,
	},
	{
	  path: RoutePath.articles,
	  icon: ArticlesIcon,
	  text: 'Cтатьи',
	  authOnly: true,
	},
]
