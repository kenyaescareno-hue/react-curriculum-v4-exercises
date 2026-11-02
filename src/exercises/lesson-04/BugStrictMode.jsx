import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Explanation:
// StrictMode runs the effect twice when testing in development.
// Without cleanup, both timers can keep running and make the
// counter go up by 2 instead of 1. The cleanup stops the old
// timer so only one runs at a time.
