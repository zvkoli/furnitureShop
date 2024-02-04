import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IArticlesState } from "@/types/IArticlesState";
import { RootState } from "@/redux_toolkit/store";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/api/articles");
      const data = await res.json();
      return data.articlesdata;
    } catch (error: string | any) {
      console.log(error.message);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState: IArticlesState = {
   articles: [],
   loading: false,
   error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as { error: string }).error;
      });
  },
});

export default articlesSlice.reducer;

export const selectArticles = (state: RootState) => state.articles.articles;
export const selectLoadingStatus = (state: RootState) => state.articles.loading;
export const selectError = (state: RootState) => state.articles.error;
