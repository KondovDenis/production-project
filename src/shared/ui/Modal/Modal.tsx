import React, { ReactNode, useCallback, useEffect } from 'react';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { classNames } from '../../lib/classNames/classNames';


interface ModalProps {

    className?:string;
    children?:ReactNode;
    isOpen?: boolean;
    onClose?: ()=>void;
}





export const Modal = (props:ModalProps) => {


    const {className, children, isOpen, onClose} = props
    
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,

    }

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