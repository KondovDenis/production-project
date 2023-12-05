import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "../../../../entities/Counter";
import { usersReducer } from "../../../../entities/User";
import { createReducerManager } from "./reducerManager";





export function createReduxStore(initialState?:StateSchema){
	
    const rootReducers: ReducersMapObject<StateSchema> = {
	counter: counterReducer,
	user: usersReducer,
    }

    const reducerManager = createReducerManager(rootReducers)




    const store = configureStore<StateSchema>({
        
	reducer: reducerManager.reduce,
	devTools:__IS_DEV__,
	preloadedState: initialState,


     })
   //@ts-ignore
   store.reducerManager = reducerManager
   
   return store
}
