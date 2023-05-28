import { useState } from "react";
import useTimeout from "./useTimeout";

export default function TimeoutComponent() {
  const [count, setCount] = useState(10);
  const { clearTheTimeout, resetTheTimeout } = useTimeout(
    () => setCount(0),
    1000
  );

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clearTheTimeout}>Clear Timeout</button>
      <button onClick={resetTheTimeout}>Reset Timeout</button>
    </div>
  );
}
