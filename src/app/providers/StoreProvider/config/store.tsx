import { CombinedState, ReducersMapObject, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { counterReducer } from "../../../../entities/Counter";
import { usersReducer } from "../../../../entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "../../../../shared/api/api";
import { NavigateOptions } from "react-router-dom";
import { To } from "react-router-dom";
import { Reducer } from "@reduxjs/toolkit";



export function createReduxStore(initialState?:StateSchema,
				asyncReducers?: ReducersMapObject<StateSchema>, 
				navigate?:(to: To, options?: NavigateOptions)=>void){
	
    const rootReducers: ReducersMapObject<StateSchema> = {
	counter: counterReducer,
	user: usersReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArg: ThunkExtraArg = {api: $api, navigate} 


    const store = configureStore({
	reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
	devTools:__IS_DEV__,
	preloadedState: initialState,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		thunk: {
		   extraArgument:extraArg,
		}
	}) 


     })
   //@ts-ignore
   store.reducerManager = reducerManager
   
   return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
