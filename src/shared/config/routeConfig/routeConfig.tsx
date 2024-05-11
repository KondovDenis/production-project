
import { MainPage } from "../../../pages/MainPage"
import { AboutPage } from "../../../pages/AboutPage"
import { RouteProps } from "react-router-dom"
import { NotFoundPage } from "../../../pages/NotFoundPage"
import React, {Component} from "react"
import { ProfilePage } from "../../../pages/ProfilePage"



export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}


export enum AppRoutes{
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}



export const RoutePath: Record<AppRoutes,string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]:'/*'
}



export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage></MainPage>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage></AboutPage>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage></NotFoundPage>
    },
    [AppRoutes.PROFILE]:{
	path:RoutePath.profile,
	element: <ProfilePage></ProfilePage>,
	authOnly: true,
    }
}
