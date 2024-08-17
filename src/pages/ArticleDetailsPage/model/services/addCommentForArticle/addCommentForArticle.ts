import { ThunkConfig } from "../../../../../app/providers/StoreProvider"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUserAuthData } from "../../../../../entities/User"
import { getAddCommentFormText } from "../../../../../features/addCommentForm/model/selectors/addCommentFormSelectors"
import { getArticleDetailsData } from "../../../../../entities/Articles/model/selectors/articleDetails"
import { addCommentFormActions } from "../../../../../features/addCommentForm/model/slices/addCommentFormSlice"
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId"





export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
	'articleDetails/addCommentForArticle',
	async(text, thunkApi) =>{
		const {extra, dispatch, rejectWithValue, getState} = thunkApi
		const userData = getUserAuthData(getState())
		const article = getArticleDetailsData(getState())

		if(!userData||!text||!article){
			return rejectWithValue('no data')
		}

		try{
		    const response = await extra.api.post<Comment>('/comments', {
			//@ts-ignore
			articleId: article.id,
			userId: userData.id,
			text,
		    })

		    if(!response.data){
			throw new Error()
		    }
		    //@ts-ignore
		    dispatch(fetchCommentsByArticleId(article.id))

		    return response.data
		} catch(e){
		    console.log(e)
		    return rejectWithValue('error')
		}
	}
)
