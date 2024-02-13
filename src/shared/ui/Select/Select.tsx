import { ChangeEventHandler, memo, useMemo } from "react"
import { Mods, classNames } from "../../lib/classNames/classNames"
import cls from './Select.module.scss'
import { ChangeEvent } from "react"

export interface SelecOption{
	value: string
	content: string
}


interface SelectProps{
    className?: string
    label?: string
    options?: SelecOption[]
    value?: string
    onChange?: (value:string) => void
    readOnly?: boolean
}



export const Select = memo((props:SelectProps) => {

   const {className, label, options, value, onChange, readOnly} = props

   const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
	if(onChange){
		onChange(e.target.value)
	}
   }
	
   const optionsList = useMemo(()=>
       options?.map((opt) => (
		<option className={cls.option} value={opt.value} key={opt.value}>
			{opt.content}
		</option>
       )), [options])	
    const mods: Mods ={
    }

    return(
    	<div className={classNames(cls.Wrapper, mods, [className])}>
	    {label && (<span className={cls.label}>
	    	{`${label} >`}
	    </span>)}
	    <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readOnly}>
	    	{optionsList}
	    </select>
	</div>
    )
})
