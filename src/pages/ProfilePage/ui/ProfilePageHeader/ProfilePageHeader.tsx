import { classNames } from "../../../../shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ProfilePageHeader.module.scss"
import { Text } from "../../../../shared/ui/Text/Text";
import { Button } from "../../../../shared/ui/Button/Button";
import { ThemeButton } from "../../../../shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getProfileData, getProfileError, getProfileReadOnly, profileActions, updateProfileData } from "../../../../entities/Profile";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import { profileValidSchema } from "../../../../entities/Profile/model/services/validateProfileData/validateProfileData";


interface ProfilePageHeader {
	className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeader) => {
	
   const {t} = useTranslation() 
    
   const {className,} = props
	
   const readonly = useSelector(getProfileReadOnly)

   const data = useSelector(getProfileData)

   const error = useSelector(getProfileError)
   
   const dispatch = useAppDispatch()

   const onEdit = useCallback(() => {
	dispatch(profileActions.setReadOnly(false))
   }, [dispatch])

   const onCancelEdit = useCallback(() => {
	dispatch(profileActions.cancelEdit())
   }, [dispatch])

   const onSave = ()=>{
   	dispatch(updateProfileData())
   }


    return(
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
	    <Text title={t('Профиль')}></Text>
	    {readonly?<Button className={cls.editBtn} theme={ThemeButton.OUTLINE} onClick={onEdit}>{t('Редактировать')}</Button>
	    : <>
	       {error&&<Text className={cls.error} title={t('Неправильно заполнена форма !')} text={error}></Text>}
	      <Button className={cls.editBtn} theme={ThemeButton.OUTLINE} onClick={onCancelEdit}>{t('Отменить')}</Button> 
	      <Button className={cls.saveBtn} theme={ThemeButton.OUTLINE} onClick={onSave}>{t('Сохранить')}</Button> 
	      </>}
        </div>
    )
}
