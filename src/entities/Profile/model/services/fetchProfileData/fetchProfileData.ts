import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider";
import { Profile } from "../../types/profile";
import { ThunkExtraArg } from "../../../../../app/providers/StoreProvider/config/StateSchema";






export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/fetchProfileData',
	async (_, thunkApi) => {
	    const {extra, rejectWithValue} = thunkApi
	    try {
		const response = await extra.api.get<Profile>('profile')
		return response.data
	    } catch(e){
		console.log(e)
		return rejectWithValue('error')
	    }

	}
)
