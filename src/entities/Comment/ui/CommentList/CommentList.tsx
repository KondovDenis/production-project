import { memo } from "react"
import { Comment } from "../../model/types/comment"
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text } from "../../../../shared/ui/Text/Text";
import cls from "./CommentList.module.scss"
import { CommentCard } from "../CommentCard/CommentCard";


interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}




export const CommentList = memo((props: CommentListProps) => {
	
	const {className, comments, isLoading} = props

	const {t} = useTranslation()

	return(
		<div className={classNames(cls.CommentList, {}, [className])}>
			{comments?.length?
				comments.map(
					(comment) =>(
						<CommentCard isLoading={isLoading} className={cls.comment} comment={comment}></CommentCard>
					))
			: <Text text={t('Комментарии отсутствуют')}/>

			}
		</div>
	)
})
