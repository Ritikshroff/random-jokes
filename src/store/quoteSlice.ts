import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface QuoteState {
  quote: {
    author: string;
    content: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
    id: number;
  } | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: QuoteState = {
  quote: null,
  status: 'idle',
  error: null,
};

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
  const response = await axios.get('https://api.freeapi.app/api/v1/public/quotes/quote/random');
  return response.data.data;
});

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.quote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch quote';
      });
  },
});

export default quoteSlice.reducer;
