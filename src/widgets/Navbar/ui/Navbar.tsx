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






interface NavbarProps {
    className?: string
}

export const Navbar = ({className}:NavbarProps) => {
    
    const {t} = useTranslation('navbar')

    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback( () =>{
       
       setIsAuthModal((prev)=>!prev)

       }
    ,[])

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classNames(cls.navbar, {}, [className])}>            
	   <Button theme={ThemeButton.CLEAR} className={cls.login} onClick={onToggleModal}>{t('Войти')}</Button>
           <Modal isOpen={isAuthModal} onClose={onToggleModal}>****** Fortes fortuna adivuat *****</Modal>
	    <div className={cls.links}>
                <AppLink theme = {AppLinkTheme.PRIMARY} to={RoutePath.about} className={cls.aboutLink}>{t('О сайте')}</AppLink>
            </div>
        </div>
    )
}
