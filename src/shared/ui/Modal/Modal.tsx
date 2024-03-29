import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { Mods, classNames } from '../../lib/classNames/classNames';
import { useTheme } from '../../../app/providers/ThemeProvider';


interface ModalProps {

    className?:string;
    children?:ReactNode;
    isOpen?: boolean;
    onClose?: ()=>void;
    lazy?: boolean;
}





export const Modal = (props:ModalProps) => {


    const {className, children, isOpen, onClose, lazy} = props
   
    const [isMounted, setIsMounted] = useState(false)
    const mods: Mods = {
        [cls.opened]: isOpen,

    }


    const {theme} = useTheme()

    useEffect(() => {
	
	if(isOpen){
	    
	    setIsMounted(true)

	}


    }, [isOpen])

    const closeHandler = useCallback( () =>{
	
	if (onClose){
	    onClose()
	}


   },[onClose])

    const onContentClick = (e:React.MouseEvent) => {
        
	e.stopPropagation()
        

    }

    const onKeyDown = useCallback((e:KeyboardEvent) =>{

        if(e.key === 'Escape'){
	    
	    closeHandler()

	}

    }, [closeHandler])

    useEffect( () => {
        
        if(isOpen){
            
	    window.addEventListener('keydown', onKeyDown);
	}   
        
	return() => {

            window.removeEventListener('keydown', onKeyDown)

	}
    }
    ,[isOpen, onKeyDown])	


   if(lazy && !isMounted){

	return null;
   }

    return(
     <Portal>
        <div className={classNames(cls.Modal, mods, [className])}>
	    <div className={cls.overlay} onClick={closeHandler}>
		<div className={cls.content} onClick={onContentClick}>
		    {children}
		</div>
	    </div>
	 </div>
    </Portal>
    )

}
