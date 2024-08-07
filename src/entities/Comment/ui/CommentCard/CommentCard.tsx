import { memo } from "react"
import { classNames } from "../../../../shared/lib/classNames/classNames"
import { Comment } from "../../model/types/comment"
import cls from "./CommentCard.module.scss"
import { Avatar } from "../../../../shared/ui/Avatar/Avatar"
import { Text } from "../../../../shared/ui/Text/Text"
import { Skeleton } from "../../../../shared/ui/Skeleton/Skeleton"


interface CommentCardProps{
	className?: string
	comment?: Comment
	isLoading?: boolean
}




export const CommentCard = memo((props: CommentCardProps) => {

	const {className, comment, isLoading} = props


	if(isLoading){
	    return(
	    	<div className={classNames(cls.CommentCard, {}, [className])}>
			<div className={cls.header}>
				<Skeleton width={30} height={30} border="50%"></Skeleton>
				<Skeleton height={16} width={100} className={cls.username}></Skeleton>
			</div>
			<Skeleton className={cls.text} width="100%" height={50}></Skeleton>
		</div>
	)

	}

	return(
		<div className={classNames(cls.CommentCard, {}, [className])}>
			<div className={cls.header}>
				{comment?.user.avatar?<Avatar size={30} src={comment.user.avatar}></Avatar>: null}
				<Text  className={cls.username} title={comment?.user.username}></Text>
			</div>
			<Text className={cls.text} text={comment?.text}></Text>

		</div>
	)

})
