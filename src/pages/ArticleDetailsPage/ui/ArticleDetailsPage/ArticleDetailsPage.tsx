import { classNames } from '../../../../shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '../../../../entities/Articles/ui/ArticleDetails/ArticleDetails';
import { useParams } from 'react-router-dom';
import { ArticleBlock, ArticleBlockType } from '../../../../entities/Articles/model/types/types';
import { ArticleTextBlockComponent } from '../../../../entities/Articles/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Text } from '../../../../shared/ui/Text/Text';
import { CommentList } from '../../../../entities/Comment';
import { ArticleCodeBlockComponent } from '../../../../entities/Articles/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../../../entities/Articles/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading, getArticleCommentsError } from '../../../../entities/Comment/model/selectors/comments';
import { getArticleDetailsOnError } from '../../../../entities/Articles/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from '../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
import { ReducersList } from '../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    
   const reducers: ReducersList = {
       articleDetailsComments: articleDetailsCommentsReducer,
    };

    const { className } = props;
    const { t } = useTranslation();
    const {id} = useParams<{id:string}>()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const error = useSelector(getArticleDetailsOnError)
    const dispatch = useDispatch()


    useEffect(()=>{
    	//@ts-ignore
	dispatch(fetchCommentsByArticleId(id))
	}, [id])	
	
    

    if(!id){
	return(
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			{t('Страница не найдена')}
		</div>
	)
    }
    return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        	<ArticleDetails id={id}></ArticleDetails>
		{error? null : <Text title={t('Комментарии')}></Text>}
		{error? null: <CommentList comments={comments} isLoading={commentsIsLoading}></CommentList>}
	</div>
    </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

