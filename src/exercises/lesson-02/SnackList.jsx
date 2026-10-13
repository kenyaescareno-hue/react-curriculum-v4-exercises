export default function SnackList() {
  const snacks = [
    { name: 'Jerky', rank: 5 },
    { name: 'Hummus', rank: 4 },
    { name: 'Mint ice cream', rank: 3 },
    { name: 'Oranges', rank: 2 },
    { name: "Hot Fries (Chester's)", rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>{snack.name}</li>
      ))}
    </ol>
  );
}
