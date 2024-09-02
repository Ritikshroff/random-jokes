import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the joke object
interface Joke {
  id: number;
  content: string;
  categories: string[];
}

// Define a type for the slice state
interface JokesState {
  jokes: Joke[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the initial state using that type
const initialState: JokesState = {
  jokes: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch jokes
export const fetchJokes = createAsyncThunk('jokes/fetchJokes', async () => {
  const response = await fetch(
    'https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1'
  );
  const data = await response.json();
  return data.data.data; // Accessing the nested data structure correctly
});

// Create the slice
const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJokes.fulfilled, (state, action: PayloadAction<Joke[]>) => {
        state.status = 'succeeded';
        state.jokes = action.payload;
      })
      .addCase(fetchJokes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch jokes';
      });
  },
});

export default jokesSlice.reducer;
