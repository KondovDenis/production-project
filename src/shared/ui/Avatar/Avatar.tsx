import { CSSProperties } from "react"
import { classNames } from "../../lib/classNames/classNames"
import { Mods } from "../../lib/classNames/classNames"
import { useMemo } from "react"
import cls from "./Avatar.module.scss"


interface AvatarProps{
	
	className?: string
	src?: string
	size?: number
	alt?: string
	children?: any
}




export const Avatar = ({className, src, size, alt}: AvatarProps) =>{

	const mods: Mods = {}
	
	const style = useMemo<CSSProperties>(() =>({
	
	    width:size || 160,
	    height: size|| 160,

	}), [size])

	return(
	    <img
		src={src}
		alt={alt}
		style={style}
		className={classNames(cls.Avatar, mods, [className])}
	    />
	)
}
