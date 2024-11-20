import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount); // Bug: initialCount is string

  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  const increment = () => {
    setCount(count + 1); // This will concatenate strings if count is a string
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

export default Counter;
