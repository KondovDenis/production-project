import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "../../../../shared/ui/Button/Button";
import { Input } from "../../../../shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { TextTheme } from "../../../../shared/ui/Text/Text";
import { Text } from "../../../../shared/ui/Text/Text";



interface LoginFormProps{

	className?:string;
}




export const LoginForm = memo(({className}: LoginFormProps) => {
	
	const {t} = useTranslation();

	const dispatch = useDispatch<ThunkDispatch<any,any,any>>()
	
	const {username, password, error, isLoading} = useSelector(getLoginState)

	const onChangeUserName = useCallback((value:string) => {

		dispatch(loginActions.setUsername(value))	

	}, [dispatch])

	const onChangePassword = useCallback((value:string) => {

		dispatch(loginActions.setPassword(value))	

	}, [dispatch])


	const onLoginClick = useCallback(() =>{

		
	    dispatch(loginByUsername({username, password}))
	
	},[dispatch, password, username])

	return(
	        <div className={classNames(cls.LoginForm, {}, [className])}>
		    {error&&<Text text={error} theme={TextTheme.ERROR}/>}
		    <Input  autoFocus={true} type="text" onChange={onChangeUserName} value={username} className={cls.input} placeholder={t('Введите логин >')}/>
		    <Input type="text" onChange={onChangePassword} value={password} className={cls.input}placeholder={t('Введите пароль > ')}/>
		    <Button theme={ThemeButton.OUTLINE} className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
		    	{t('Войти')}
		    </Button>
		</div>
	      )

})
