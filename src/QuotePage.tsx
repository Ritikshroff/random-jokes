import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store/store';  // Import RootState and AppDispatch
import { fetchQuote } from './store/quoteSlice';

const QuotePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const quote = useSelector((state: RootState) => state.quote.quote);
  const status = useSelector((state: RootState) => state.quote.status);
  const error = useSelector((state: RootState) => state.quote.error);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  // Function to fetch the quote again
  const handleFetchQuote = () => {
    dispatch(fetchQuote());
  };

  if (status === 'loading') {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center text-lg text-red-500">Error: {error}</div>;
  }

  if (!quote) {
    return <div className="text-center text-lg">No quote available</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 max-w-lg mx-auto">
        <p className="text-xl font-semibold mb-4">"{quote.content}"</p>
        <p className="text-md text-gray-600 mb-4">- {quote.author}</p>
        <p className="text-sm text-gray-500">Tags: {quote.tags.join(', ')}</p>
        <p className="text-xs text-gray-400 mt-2">Added on: {quote.dateAdded}</p>
        {/* Button to fetch a new quote */}
        <button
          onClick={handleFetchQuote}
          className="bg-gray-400 m-2 p-2 rounded-sm hover:bg-white hover:text-black"
        >
          Fetch New Quote
        </button>
      </div>
    </div>
  );
};

export default QuotePage;
