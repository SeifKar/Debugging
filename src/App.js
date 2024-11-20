import React, { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    // Intentional bug: age is undefined
  });

  return (
    <div className="App">
      <h1>React Debugging Demo</h1>
      <UserProfile userData={user} />
      <Counter initialCount="5" /> {/* Intentional bug: passing string instead of number */}
      <TodoList />
    </div>
  );
}

export default App;
