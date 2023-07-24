import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss'
import { Button } from '../../../shared/ui/Button/Button';




interface ErrorPageProps {
    className?:string
}

const ErrorPage = ({className}:ErrorPageProps) => {

    const {t} = useTranslation('error_page')
    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Произошла непредвиденная ошбика')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}



export default ErrorPage;