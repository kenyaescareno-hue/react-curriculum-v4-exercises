export default function Child({ onIncrement }) {
  // I used the function passed from the parent so clicking
  // this button updates the parent's counter.

  return <button onClick={onIncrement}>Increment Counter</button>;
}
