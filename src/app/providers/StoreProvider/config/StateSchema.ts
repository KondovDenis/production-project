import { CombinedState, Dispatch, EnhancedStore } from "@reduxjs/toolkit";
import { CounterSchema } from "../../../../entities/Counter";
import { UserSchema } from "../../../../entities/User";
import { LoginSchema } from "../../../../features/AuthByUsername";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { Reducer } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import { ProfileSchema } from "../../../../entities/Profile";
import { AxiosInstance } from "axios";
import { NavigateOptions } from "react-router-dom";
import { To } from "react-router-dom";
import { ArticleDetailsSchema } from "../../../../entities/Articles";
import { ArticleDetailsCommentsSchema } from "../../../../pages/ArticleDetailsPage";


export interface CounterState{

}


export interface StateSchema{

    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
}


export type StateSchemaKey = keyof StateSchema



export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    
	reducerManager: ReducerManager;

}



export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
	api: AxiosInstance,
	navigate?: (to:To, options?:NavigateOptions) => void
}


export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	dispatch?: Dispatch
	state: StateSchema
}
