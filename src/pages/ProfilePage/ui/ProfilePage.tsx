import React, { useCallback, useEffect } from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ProfileCard, fetchProfileData, getProfileReadOnly, profileActions, profileReducer } from "../../../entities/Profile";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getProfileData } from "../../../entities/Profile";
import { getProfileIsLoading } from "../../../entities/Profile";
import { getProfileError } from "../../../entities/Profile";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileForm } from "../../../entities/Profile";
import { Currency } from "../../../entities/Currency";
import { Country } from "../../../entities/Country";




const reducers: ReducersList = {
	profile: profileReducer	
}


interface ProfilePageProps{
	className?:string
}


const ProfilePage = ({className}:ProfilePageProps) => {
	const {t} = useTranslation()
	
	const dispatch = useAppDispatch()
	const formData = useSelector(getProfileForm)
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)
	const readOnly = useSelector(getProfileReadOnly)

	useEffect(()=>{dispatch(fetchProfileData())},[dispatch])
	
	const onChangeFirstname = useCallback((value?:string)=>{
	    
	    dispatch(profileActions.updateProfile({first:value || ''}))
	},[dispatch]) 
	
	const onChangeLastname = useCallback((value?:string)=>{
	    
	    dispatch(profileActions.updateProfile({lastname:value || ''}))
	},[dispatch])
	
	const onChangeAge = useCallback((value?:string)=>{
	    
	    dispatch(profileActions.updateProfile({age:Number(value || 0)}))
	},[dispatch])
	
	const onChangeCity = useCallback((value?:string)=>{
	    
	    dispatch(profileActions.updateProfile({city: value || ''}))
	},[dispatch])

	const onChangeUsername = useCallback((value?:string)=>{
	    
	    dispatch(profileActions.updateProfile({username: value || ''}))
	},[dispatch])

	const onChangeAvatar = useCallback((value?:string)=>{
	    
	    dispatch(profileActions.updateProfile({avatar: value || ''}))
	},[dispatch])

	const onChangeCurrency = useCallback((currency?:Currency)=>{

	    dispatch(profileActions.updateProfile({currency}))
	},[dispatch])

	const onChangeCountry = useCallback((country?:Country)=>{

	    dispatch(profileActions.updateProfile({country}))
	},[dispatch])
	
	return(
	      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
		<div className={classNames('', {}, [className])}>
		   <ProfilePageHeader></ProfilePageHeader> 	
		    <ProfileCard data ={formData} 
		    		isLoading={isLoading} 
				error={error} 
				readOnly={readOnly}  
				onChangeFirstname={onChangeFirstname} 
				onChangeLastname={onChangeLastname} 
				onChangeAge={onChangeAge}
				onChangeCity={onChangeCity}
				onChangeUsername={onChangeUsername}
				onChangeAvatar={onChangeAvatar}
				onChangeCurrency={onChangeCurrency}
				onChangeCountry={onChangeCountry}>
		   </ProfileCard>
		</div>
	      </DynamicModuleLoader>
	)
}

export default ProfilePage
