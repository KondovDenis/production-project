import { classNames } from '../../../shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '../../../entities/Articles/ui/ArticleDetails/ArticleDetails';
import { useParams } from 'react-router-dom';
import { ArticleBlock, ArticleBlockType } from '../../../entities/Articles/model/types/types';
import {ArticleCodeBlockComponent} from '../../../entities/Articles/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../../entities/Articles/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../../entities/Articles/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';


interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {id} = useParams<{id:string}>()
	




    if(!id){
	return(
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			{t('Страница не найдена')}
		</div>
	)
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        	<ArticleDetails id={id}></ArticleDetails>
	</div>
    );
};

export default memo(ArticleDetailsPage);

