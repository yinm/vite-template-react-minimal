import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count up
      </button>
    </div>
  );
}
