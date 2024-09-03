import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJokes } from './store/jokesSlice';
import { RootState, AppDispatch } from './store/store';

const Jokes: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Specify AppDispatch to match type
  const jokes = useSelector((state: RootState) => state.jokes.jokes);
  const status = useSelector((state: RootState) => state.jokes.status);
  const error = useSelector((state: RootState) => state.jokes.error);

  useEffect(() => {
    dispatch(fetchJokes());
  }, [dispatch]);

  if (status === 'loading') {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center text-red-500">Error: {error}</div>; 
  }

  return (
    <>
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {jokes.map((joke) => (
        <div
          key={joke.id}
          className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Joke ID: {joke.id}
          </h2>
          <p className="text-gray-700">{joke.content}</p>
          {joke.categories.length > 0 && (
            <p className="mt-2 text-sm text-gray-500">
              Categories: {joke.categories.join(', ')}
            </p>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default Jokes;
