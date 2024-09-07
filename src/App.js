import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

function Counter({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
