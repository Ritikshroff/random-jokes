import React from 'react';
import Jokes from './Jokes';
import QuotePage from './QuotePage';

const App: React.FC = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Jokes />
    </div>

    <div className='bg-gray-100 flex items-center justify-center'>
      <QuotePage/>
    </div>
    </>
  );
};

export default App;
