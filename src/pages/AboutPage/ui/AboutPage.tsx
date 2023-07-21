import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageLoader } from '../../../widgets/PageLoader';




const AboutPage = () => {

    const {t} = useTranslation('about')

    return (
        <div>
            {t('О сайте')}
        </div>
    )
}



export default AboutPage;