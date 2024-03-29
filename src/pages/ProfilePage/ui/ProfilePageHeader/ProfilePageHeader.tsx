import { classNames } from "../../../../shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ProfilePageHeader.module.scss"
import { Text } from "../../../../shared/ui/Text/Text";
import { Button } from "../../../../shared/ui/Button/Button";
import { ThemeButton } from "../../../../shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getProfileReadOnly, profileActions, updateProfileData } from "../../../../entities/Profile";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";


interface ProfilePageHeader {
	className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeader) => {
	
    const {t} = useTranslation() 
    
    const {className,} = props
	
   const readonly = useSelector(getProfileReadOnly)

   const dispatch = useAppDispatch()

   const onEdit = useCallback(() => {
	dispatch(profileActions.setReadOnly(false))
   }, [dispatch])

   const onCancelEdit = useCallback(() => {
	dispatch(profileActions.cancelEdit())
   }, [dispatch])

   const onSave = useCallback(()=>{
   	dispatch(updateProfileData())
   },[dispatch])


    return(
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
	    <Text title={t('Профиль')}></Text>
	    {readonly?<Button className={cls.editBtn} theme={ThemeButton.OUTLINE} onClick={onEdit}>{t('Редактировать')}</Button>
	    : <> 
	      <Button className={cls.editBtn} theme={ThemeButton.OUTLINE} onClick={onCancelEdit}>{t('Отменить')}</Button> 
	      <Button className={cls.saveBtn} theme={ThemeButton.OUTLINE} onClick={onSave}>{t('Сохранить')}</Button> 
	      </>}
        </div>
    )
}
