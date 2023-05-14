import React, { Suspense, useContext, useState } from "react";
import Counter from "./components/Counter";
import './pages/style/index.scss'
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { ThemeContext } from "./theme/ThemeContext";
import { Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";


const App = () =>{

    const {theme, toggleTheme} = useTheme()

    return(
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync></AboutPageAsync>}></Route>
                    <Route path={'/'}element={<MainPageAsync></MainPageAsync>}></Route>
                </Routes>
            </Suspense>
            <Counter></Counter>
        </div>
    )
}



export default App