import React, {Suspense, useCallback} from "react";
import { Route, Routes} from "react-router-dom";
import MainPage from "../../../../pages/MainPage/ui/MainPage";
import AboutPage from "../../../../pages/AboutPage/ui/AboutPage";
import { routerConfig, AppRoutesProps } from "../../../../shared/config/routeConfig/routeConfig";
import { PageLoader } from "../../../../widgets/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "../../../../entities/User";
import { memo } from "react";
import { useMemo } from "react";
import { RequireAuth } from "./RequireAuth";




const AppRouter = () =>{

    const renderWithWrapper = useCallback((route:AppRoutesProps) => {
	const element = (
		<Suspense fallback={<PageLoader></PageLoader>}>
			<div className="page-wrapper">
				{route.element}
			</div>
		</Suspense>
	)
		return( 
			<Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth>{element}</RequireAuth>:element}>
			</Route>
		)

    }, [])
    return(
	<Routes>
	    {Object.values(routerConfig).map(renderWithWrapper)}
        </Routes>
	     )
}


export default memo(AppRouter)
