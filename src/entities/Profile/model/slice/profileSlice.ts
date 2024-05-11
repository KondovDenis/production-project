import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { profileValidSchema } from "../services/validateProfileData/validateProfileData";


const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	error: undefined,
	data: undefined,
}


export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
	   setReadOnly: (state, action: PayloadAction<boolean>) => {state.readonly=action.payload},
	   updateProfile: (state, action: PayloadAction<Profile>) => {state.form = {...state.form, ...action.payload}},
	   cancelEdit: (state) => {state.readonly = true
		   		   state.form = state.data
	   			  }
	},
	extraReducers(builder) {
	    builder
	    .addCase(fetchProfileData.pending, (state) =>{
		state.error = undefined
		state.isLoading = true
	    })
	     //@ts-ignore
	    .addCase(fetchProfileData.fulfilled, (state, action)=>{
		state.isLoading = false
		state.data = action.payload
		state.form = action.payload
	    })
	    //@ts-ignore
	    .addCase(fetchProfileData.rejected, (state, action)=>{
		state.isLoading = false
		state.error = action.payload
	    })
	    .addCase(updateProfileData.pending, (state) =>{
		state.error = undefined
		state.isLoading = true
	    })
	     //@ts-ignore
	    .addCase(updateProfileData.fulfilled, (state, action)=>{
		try{
		    profileValidSchema.validateSync(action.payload)
		    state.isLoading = false
		    state.data = action.payload
		    state.form = action.payload
		    state.readonly = true
		}
		
		catch(error:any){
		    if(error.name == 'ValidationError' ){
			state.error = error.message
			state.readonly = false
		    }	
		}

	    })
	    //@ts-ignore
	    .addCase(updateProfileData.rejected, (state, action)=>{
		state.isLoading = false
		state.error = action.payload
	    })
	},
})


export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice
