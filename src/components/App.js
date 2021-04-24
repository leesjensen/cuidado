import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      This may not look like it yet, but this is an awesome game
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}