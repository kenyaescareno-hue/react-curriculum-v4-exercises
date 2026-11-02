import { useState } from 'react';

// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Update the click count when the button is clicked
export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((count) => count + 1);
  }

  // I used useState because I want the counter to update
  // on the screen every time the button is clicked.

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}
