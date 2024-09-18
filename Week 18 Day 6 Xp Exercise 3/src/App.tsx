import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter'; // Import the Counter component

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="John" />
      <Counter /> {/* Add the Counter component here */}
    </div>
  );
};

export default App;
