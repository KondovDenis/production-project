import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { Country } from "../model/types/country"
import { Select } from "../../../shared/ui/Select/Select"
import { classNames } from "../../../shared/lib/classNames/classNames"


interface CountrySelectProps{
	className?:string
	value?: Country
	onChange?: (value: Country) => void
	readOnly?: boolean
}



const options = [{value: Country.Russia, content:Country.Russia}, {value: Country.Belarus, content:Country.Belarus}, {value: Country.Kazahstan, content:Country.Kazahstan}]


export const CountrySelect = memo((props: CountrySelectProps) => {

	const {className, value, onChange, readOnly} = props

	const {t} = useTranslation()

	const onChangeHandler = useCallback( (value: string) =>{
		onChange?.(value as Country)
	},[onChange]) 

	return(
	    <Select label={t("Укажите страну")} options={options} value={value} onChange={onChangeHandler} readOnly={readOnly}></Select>
	)
})
