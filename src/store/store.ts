import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteSlice';  // Import the quote reducer
import jokesReducer from './jokesSlice';  // Import the jokes reducer if used

const store = configureStore({
  reducer: {
    quote: quoteReducer,   // Add quote reducer here
    jokes: jokesReducer,   // Add jokes reducer if used
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
