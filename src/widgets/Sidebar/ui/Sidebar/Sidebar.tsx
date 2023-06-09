import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { FC, useState } from 'react';
import { ThemeSwitcher } from '../../../../shared/ui/ThemeSwitcher';
import { LangSwitcher } from '../../../LangSwitcher';


interface SidebarProps  {
    className?: string;
}




export const Sidebar: FC<SidebarProps> = ({className}:SidebarProps) => {


    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return(
	<div className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
        <button onClick={onToggle}>toggle</button>
        <div className={cls.switchers}>
            <ThemeSwitcher></ThemeSwitcher>
            <LangSwitcher className={cls.lang}></LangSwitcher>
        </div>
	</div>
        )
}