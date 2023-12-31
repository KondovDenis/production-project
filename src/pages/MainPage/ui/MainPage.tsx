import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '../../../app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from '../../../entities/Counter';
import { memo } from 'react';


const MainPage = memo(() => {

    const {t} = useTranslation('main')

    return (
        <div>
            <BugButton></BugButton>
            {t('Главная страница')}
	</div>
    )
})



export default MainPage;
