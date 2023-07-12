import React, {Suspense} from "react";
import { Route, Routes} from "react-router-dom";
import MainPage from "../../../../pages/MainPage/ui/MainPage";
import AboutPage from "../../../../pages/AboutPage/ui/AboutPage";
import { routerConfig } from "../../../../shared/config/routeConfig/routeConfig";



const AppRouter = () =>{


    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({element, path})=>(
                        <Route key={path} path={path} element={
                        <div className="page-wrapper">
                            {element}
                        </div>
                        }>

                        </Route>
                ))}
            </Routes>
        </Suspense>

    )
}


export default AppRouter