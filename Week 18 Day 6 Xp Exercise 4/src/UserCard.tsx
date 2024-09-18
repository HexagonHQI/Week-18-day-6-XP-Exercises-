// src/UserCard.tsx
import React from 'react';

interface UserCardProps {
  name?: string; // Optional prop
  age?: number;  // Optional prop
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div className="user-card">
      {name ? <h2>{name}</h2> : <h2>No name provided</h2>}
      {age !== undefined ? <p>Age: {age}</p> : <p>Age not provided</p>}
    </div>
  );
};

export default UserCard;
