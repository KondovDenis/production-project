import { useEffect, useTransition } from "react"
import { classNames } from "../../../../shared/lib/classNames/classNames"
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, ReducersList } from "../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice"
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch"
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById"
import { memo } from "react"
import { useSelector } from "react-redux"
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsOnError } from "../../model/selectors/articleDetails"
import { TextAlign, TextSize } from "../../../../shared/ui/Text/Text"
import { Text } from "../../../../shared/ui/Text/Text"
import { Skeleton } from "../../../../shared/ui/Skeleton/Skeleton"
import { Avatar } from "../../../../shared/ui/Avatar/Avatar"
import EyeIcon from "../../../../shared/assets/icons/eye-20-20.svg"
import CalendarIcon from "../../../../shared/assets/icons/calendar-20-20.svg" 
import { Icon } from "../../../../shared/ui/Icon/Icon"
import { ArticleBlockType } from "../../model/types/types"
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent"
import { useCallback } from "react"
import { ArticleBlock } from "../../model/types/types"

interface ArticleDetailsProps {
	className?:string
	id: string
}


const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props:ArticleDetailsProps) => {
	const {className, id} = props
	const dispatch = useAppDispatch()

	const isLoading = useSelector(getArticleDetailsIsLoading)
	//const isLoading = true
	const article = useSelector(getArticleDetailsData)
	const error = useSelector(getArticleDetailsOnError)

	const renderBlock = useCallback((block: ArticleBlock)=>{
    		switch (block.type){
	    		case ArticleBlockType.CODE:
	    			return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}></ArticleCodeBlockComponent>
	    		case ArticleBlockType.IMAGE:
	        		return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}></ArticleImageBlockComponent>
	    		case ArticleBlockType.TEXT:
	    			return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}></ArticleTextBlockComponent>
	    		default:
	    			null
		}
         }, [])

	useEffect(()=>{
		dispatch(fetchArticleById(id))
	},[dispatch, id])

	let content

	if(isLoading){
	    content = (
	    <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
	    )
	} else if(error){
	    content = (
	    	<Text align={TextAlign.CENTER} title={'При загрузке статьи произошла ошибка'}></Text>
	    )
	} else {
	   content = (
	   	<>
		  <div className={cls.avatarWrapper}>
		   <Avatar size={200} src={article?.img} className={cls.avatar}></Avatar>
		  </div>
		   <Text title={article?.title} text={article?.subtitle} size={TextSize.L}></Text>
		   <div className={cls.articleInfo}>
			<Icon className={cls.icon} Svg={EyeIcon}></Icon>
			<Text text={String(article?.views)}></Text>
		   </div>
		   <div className={cls.articleInfo}>
			<Icon className={cls.icon} Svg={CalendarIcon}></Icon>
			<Text text={String(article?.createdAt)}></Text>
			{article?.blocks.map(renderBlock)}
		   </div>
		</>
	   )
	}

	return(
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ArticlesDetails, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	)
})
