import React from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos'); // Call the useFetch hook

  return (
    <div>
      <h1>Todo List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;