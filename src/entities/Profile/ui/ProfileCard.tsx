import { useSelector } from "react-redux"
import { getProfileData } from "../model/selectors/getProfileData/getProfileData"
import { getProfileIsLoading } from "../model/selectors/getProfileIsLoading/getProfileIsLoading"
import { getProfileError } from "../model/selectors/getProfileError/getProfileError"
import { classNames } from "../../../shared/lib/classNames/classNames"
import cls from './ProfileCard.module.scss'
import { Text, TextAlign, TextTheme } from "../../../shared/ui/Text/Text"
import { Button, ThemeButton } from "../../../shared/ui/Button/Button"
import { Input } from "../../../shared/ui/Input/Input"
import { useTranslation } from "react-i18next"
import { Profile } from "../model/types/profile"
import Loader from "../../../widgets/Loader/Loader"
import { Avatar } from "../../../shared/ui/Avatar/Avatar"
import { Mods } from "../../../shared/lib/classNames/classNames"
import { Select } from "../../../shared/ui/Select/Select"
import { Currency, CurrencySelect } from "../../Currency"
import { Country } from "../../Country/model/types/country"
import { CountrySelect } from "../../Country"

interface ProfileCardProps {
	className?: string
	data?: Profile
	error?: string
	isLoading?: boolean
	readOnly?: boolean
	children?: React.ReactNode
	onChangeFirstname?: (value?:string) => void
	onChangeLastname?: (value?:string) => void
	onChangeCity?: (value?:string) => void
	onChangeAge?: (value?:string) => void
	onChangeUsername?: (value?:string) => void
	onChangeAvatar?: (value?:string) => void
	onChangeCurrency?: (value?:Currency) => void
	onChangeCountry?: (value?:Country) => void
}



export const ProfileCard = (props: ProfileCardProps) =>{

	const {className, data, isLoading, readOnly, error, onChangeFirstname, onChangeLastname, onChangeCity, onChangeAge, onChangeUsername, onChangeAvatar, onChangeCurrency, onChangeCountry} = props

	const {t} = useTranslation()
	
	if(isLoading){
	    <div className={classNames(cls.ProfileCard, {[cls.loading]:true}, [className])}>
		<Loader></Loader>
	    </div>
	}
	
	const mods: Mods ={
		[cls.editing]: !readOnly,
	}


	return(
		<div className={classNames(cls.ProfileCard, mods, [className])}>
		  <div className={cls.data}>
		  	{data?.avatar&&<div className={cls.avatarWrapper}><Avatar src={data?.avatar}/></div>}
		  	<Input value={data?.avatar} placeholder={t('Введите ссылку на аватар')} className={cls.input} onChange={onChangeAvatar} readOnly={readOnly}></Input>
		  	<Input value={data?.username} placeholder={t('Введите имя аккаунта')} className={cls.input} onChange={onChangeUsername} readOnly={readOnly}></Input>
		  	<Input value={data?.first} placeholder={t('Ваше имя')} className={cls.input} onChange={onChangeFirstname} readOnly={readOnly}></Input>
			<Input value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input} onChange={onChangeLastname} readOnly={readOnly}></Input>
			<Input value={data?.city} placeholder={t('Ваша город')} className={cls.input} onChange={onChangeCity} readOnly={readOnly}></Input>
			<Input  type="date" min="1900-01-01" max="2100-12-31" placeholder={t('Дата рождения')} className={cls.input} onChange={onChangeAge} readOnly={readOnly}></Input>
			<CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} readOnly={readOnly}></CurrencySelect>
			<CountrySelect className={cls.input} value={data?.country} onChange={onChangeCountry} readOnly={readOnly}></CountrySelect>
		  </div>
		</div>
	)
	
}
