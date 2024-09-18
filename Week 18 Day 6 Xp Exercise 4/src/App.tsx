// src/App.tsx
import React from 'react';
import UserCard from './UserCard';

const App: React.FC = () => {
  return (
    <div>
      <h1>User Information</h1>
      <UserCard name="Alice" age={30} />
      <UserCard name="Bob" />
      <UserCard />
    </div>
  );
};

export default App;

