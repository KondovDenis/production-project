import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./Input.module.scss"
import { useRef } from "react";
import { memo } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>


interface InputProps extends HTMLInputProps{

	className?:string;
	value?:string;
	onChange?:(value:string) => void;
	autofocus?:boolean;

}



export const Input = memo((props:InputProps) =>{

	const  ref = useRef<HTMLInputElement>(null)

	const [isFocused, setIsFocused] = useState(false)

	const {className, value, onChange, type='text', placeholder, autofocus, ...otherProps} = props

	const [caretPosition, setCaretPosition] = useState(0)

	useEffect(()=>{

	    if(autofocus){
   	        setIsFocused(true)
		ref.current?.focus()
	    }

	}, [autofocus])

	const onBlur = () => {

	     setIsFocused(false)
	}

	const onFocus = () => {

	     setIsFocused(true)
	}

	const onSelect = (e:any) =>{
	     setCaretPosition(e?.target?.selectionStart || 0)

	}

	const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
	
		onChange?.(e.target.value)
		setCaretPosition(e.target.value.length)
	}


	return(

	    <div className={classNames(cls.InputWrapper, {}, [className])}>
	        {placeholder&&(<div className={cls.placeholder}>{`${placeholder} >`}</div>)}
		<div className={cls.caretWrapper}>
		    <input ref={ref} type={type} value={value} onChange={onChangeHandler} className={cls.input} onBlur={onBlur} onFocus={onFocus} onSelect={onSelect} {...otherProps}/>
	    	    {isFocused&&(<span className={cls.caret} style={{left:`${caretPosition * 6}px`}}></span>)}
		</div>
	    </div>

	)
})
