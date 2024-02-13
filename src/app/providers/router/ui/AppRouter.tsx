import React, {Suspense} from "react";
import { Route, Routes} from "react-router-dom";
import MainPage from "../../../../pages/MainPage/ui/MainPage";
import AboutPage from "../../../../pages/AboutPage/ui/AboutPage";
import { routerConfig } from "../../../../shared/config/routeConfig/routeConfig";
import { PageLoader } from "../../../../widgets/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "../../../../entities/User";
import { memo } from "react";
import { useMemo } from "react";

const AppRouter = () =>{

   const isAuth = useSelector(getUserAuthData)

   const routes = useMemo(() =>{
   	return Object.values(routerConfig).filter(route => {
		
		if(route.authOnly&&!isAuth){
		     return false
		}

		return true
		
	})
   }, [isAuth])

    return(
        <Suspense fallback={<PageLoader></PageLoader>}>
            <Routes>
                {routes.map(({element, path})=>(
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


export default memo(AppRouter)
