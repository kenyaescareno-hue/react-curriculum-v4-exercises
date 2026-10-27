/*
  BUG #1 — Effect Issue

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
*/

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Required for this useEffect exercise.
    setCount((previous) => previous + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The useEffect was running after every render because it didn't have a dependency array.
// Since it was updating the count, it kept causing more renders.
// Adding [] makes it run when the component first mounts.
