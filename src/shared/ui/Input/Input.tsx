import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { Mods, classNames } from "../../lib/classNames/classNames";
import cls from "./Input.module.scss"
import { useRef } from "react";
import { memo } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>


interface InputProps extends HTMLInputProps{

	className?:string;
	value?:string | number;
	onChange?:(value:string) => void;
	autofocus?:boolean;
	readOnly?: boolean;

}



export const Input = memo((props:InputProps) =>{

	const  ref = useRef<HTMLInputElement>(null)

	const [isFocused, setIsFocused] = useState(false)

	const {className, value, onChange, type='text', placeholder, autofocus, readOnly,...otherProps} = props

	const [caretPosition, setCaretPosition] = useState(0)
	
	const isCarretVisible = isFocused && !readOnly

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

	const mods: Mods = {
		[cls.readOnly]: readOnly,
	}


	return(

	    <div className={classNames(cls.InputWrapper, {}, [className])}>
	        {placeholder&&(<div className={cls.placeholder}>{`${placeholder} >`}</div>)}
		<div className={cls.caretWrapper}>
		    <input ref={ref} type={type} value={value} onChange={onChangeHandler} className={cls.input} onBlur={onBlur} onFocus={onFocus} onSelect={onSelect} readOnly={readOnly} {...otherProps}/>
	    	    {isCarretVisible&&(<span className={cls.caret} style={{left:`${caretPosition * 6}px`}}></span>)}
		</div>
	    </div>

	)
})
