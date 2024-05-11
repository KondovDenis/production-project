import React, { Suspense, useContext, useEffect, useState } from "react";
import './style/index.scss'
import { Route, Routes, Link } from "react-router-dom";
import AboutPage from "../pages/AboutPage/ui/AboutPage";
import MainPage from "../pages/MainPage/ui/MainPage";
import { ThemeContext } from "./providers/ThemeProvider/lib/ThemeContext";
import { Theme } from "./providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "../widgets/Navbar";
import { Sidebar } from "../widgets/Sidebar";
import { Modal } from "../shared/ui/Modal/Modal";
import { Button } from "../shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "../entities/User";



const App = () =>{

    const {theme} = useTheme()
    
    const dispatch = useDispatch()
	
    const inited = useSelector(getUserInited)
    useEffect(() =>{
	
	dispatch(userActions.initAuthData())


    },[dispatch])

    return(
        <div className={classNames('app', {}, [theme])}>
           <Suspense fallback="">
                <Navbar></Navbar>
                <div className="content-page">
                    <Sidebar></Sidebar>
                    {inited&&<AppRouter></AppRouter>}
                </div>
            </Suspense>
        </div>
    )
}



export default App
