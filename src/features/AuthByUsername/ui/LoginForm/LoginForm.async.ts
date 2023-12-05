import { lazy } from "react";
import { LoginFormProps } from "./LoginForm";
import { FC } from "react";






export const LoginFormAsync  = lazy <FC<LoginFormProps>>(() => new Promise((resolve) => {
	//@ts-ignore
	setTimeout(()=>resolve(import('./LoginForm')), 1500)

}) 
 )
