import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MEME_ENDPOINT_URL } from "../../Constants/constants";
import axios from "axios";

//Action
export const fetchMeme = createAsyncThunk("fetchMeme", async () => {
  const response = await axios.get(MEME_ENDPOINT_URL);
  return response;
});

const memeSlice = createSlice({
  name: "meme",
  initialState: {
    isLoading: false,
    errorMessage: null,
    memeData: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMeme.fulfilled, (state, action) => {
      state.isLoading = false;
      state.memeData = action.payload;
    });
    builder.addCase(fetchMeme.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMeme.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
    builder.addDefaultCase((state, action) => {});
  },
});

export const memeReducer = memeSlice.reducer;
