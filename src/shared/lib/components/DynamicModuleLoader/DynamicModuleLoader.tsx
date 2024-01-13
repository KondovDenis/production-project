import { useDispatch } from "react-redux";
import { classNames } from "../../classNames/classNames";
import { StateSchemaKey } from "../../../../app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { ReduxStoreWithManager } from "../../../../app/providers/StoreProvider/config/StateSchema";
import { useStore } from "react-redux";
import { FC } from "react";



export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
	reducers: ReducersList;
	children?:any;
	removeAfterUnmount?: boolean;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {

	const {reducers, children, removeAfterUnmount} = props
       
	const store = useStore() as ReduxStoreWithManager
        
	const dispatch = useDispatch()

	useEffect( () => {
	    Object.entries(reducers).forEach(([name, reducer])=>{
		store.reducerManager.add(name as StateSchemaKey, reducer)
		
	    })
	    return () => {
	    	if(removeAfterUnmount){
	           Object.entries(reducers).forEach(([name, reducer])=>{	
		   store.reducerManager.remove(name as StateSchemaKey)
	    })
		}
	    }
	}, [])
	
	return (
	    <>
	     {children}
	    </>
	)
}
