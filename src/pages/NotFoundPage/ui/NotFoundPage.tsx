import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss'




interface NotFoundPageProps {
    className?:string
}

const NotFoundPage = ({className}:NotFoundPageProps) => {

    const {t} = useTranslation('not_found')

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Cтраница не найдена')}
        </div>
    )
}



export default NotFoundPage;