import { useSelector } from "react-redux"
import { getProfileData } from "../model/selectors/getProfileData/getProfileData"
import { getProfileIsLoading } from "../model/selectors/getProfileIsLoading/getProfileIsLoading"
import { getProfileError } from "../model/selectors/getProfileError/getProfileError"
import { classNames } from "../../../shared/lib/classNames/classNames"
import cls from './ProfileCard.module.scss'
import { Text } from "../../../shared/ui/Text/Text"
import { Button, ThemeButton } from "../../../shared/ui/Button/Button"
import { Input } from "../../../shared/ui/Input/Input"
import { useTranslation } from "react-i18next"


interface ProfileCardProps {
	className?: string
}



export const ProfileCard = ({className}: ProfileCardProps) =>{
	const {t} = useTranslation()
	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)

	return(
		<div className={classNames(cls.ProfileCard, {}, [className])}>
		  <div className={cls.header}>
		  	<Text title={t('Профиль')}></Text>
			<Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>{t('Редактировать')}</Button>
		  </div>
		  <div className={cls.data}>
		  	<Input value={data?.first} placeholder={t('Ваше имя')} className={cls.input}></Input>
			<Input value={data?.first} placeholder={t('Ваша фамилия')} className={cls.input}></Input>
		  </div>
		</div>
	)
	
}
