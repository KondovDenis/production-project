import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "../../../shared/ui/ThemeSwitcher";
import { useTranslation } from 'react-i18next';
import {RoutePath} from '../../../shared/config/routeConfig/routeConfig';
import { Button } from "../../../shared/ui/Button/Button";
import { useState } from "react";
import { ThemeButton } from "../../../shared/ui/Button/Button";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { LoginModal } from "../../../features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "../../../entities/User";





interface NavbarProps {
    className?: string
}

export const Navbar = ({className}:NavbarProps) => {
    
    const {t} = useTranslation('navbar')
    
    const authData = useSelector(getUserAuthData)

    const [isAuthModal, setIsAuthModal] = useState(false)

    const dispatch = useDispatch()

    const onCloseModal = useCallback( () =>{
       
       setIsAuthModal(false)

       }
    ,[])

    const onShowModal = useCallback(()=>{

	setIsAuthModal(true)

    }, [])

    const onLogout = useCallback(() =>{

    	dispatch(userActions.logout())

    }, [dispatch])

    const [isOpen, setIsOpen] = useState(false)

    if(authData){


    return(
	<div className={classNames(cls.navbar, {}, [className])}>
	   <Button theme={ThemeButton.CLEAR} className={cls.login} onClick={onLogout}>{t('Выйти')}</Button>
	   <div className={cls.links}>
                <AppLink theme = {AppLinkTheme.PRIMARY} to={RoutePath.about} className={cls.aboutLink}>{t('О сайте')}</AppLink>
            </div>
	</div>
	)
    }


    return(
        <div className={classNames(cls.navbar, {}, [className])}>            
	   <Button theme={ThemeButton.CLEAR} className={cls.login} onClick={onShowModal}>{t('Войти')}</Button>
	    <LoginModal isOpen={isAuthModal} onClose={onCloseModal}></LoginModal>
	    <div className={cls.links}>
                <AppLink theme = {AppLinkTheme.PRIMARY} to={RoutePath.about} className={cls.aboutLink}>{t('О сайте')}</AppLink>
            </div>
        </div>
    )
}
