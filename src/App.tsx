import React from 'react';
import Jokes from './Jokes';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Jokes />
    </div>
  );
};

export default App;
