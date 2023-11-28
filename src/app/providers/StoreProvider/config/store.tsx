import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "../../../../entities/Counter";
import { usersReducer } from "../../../../entities/User";
import { loginReducer } from "../../../../features/AuthByUsername";





export function createReduxStore(initialState?:StateSchema){
	
    const rootReducers: ReducersMapObject<StateSchema> = {
	counter: counterReducer,
	user: usersReducer,
	loginForm: loginReducer
    }

    return configureStore<StateSchema>({
        
	reducer: rootReducers,
	devTools:__IS_DEV__,
	preloadedState: initialState,


     }

    )

}
