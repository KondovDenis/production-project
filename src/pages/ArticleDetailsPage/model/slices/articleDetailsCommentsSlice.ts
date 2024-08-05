import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../../../entities/Comment/model/types/comment";
import { StateSchema } from "../../../../app/providers/StoreProvider";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";


const commentsAdapter = createEntityAdapter<Comment>({
	selectId: (comment) => comment.id
})



export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
	//@ts-ignore	
	(state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
)

const articleDetailsCommentsSlice = createSlice({
	name: 'articleDetailsCommentsSlice',
	initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		isLoading: false,
		error: undefined,
		//@ts-ignore
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },	

})
export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentsSlice
