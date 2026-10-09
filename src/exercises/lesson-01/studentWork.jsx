//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Kenya';
  const age = 23;
  const hobbies = ['drawing', 'gaming', 'coding'];

  return (
    <div>
      <h1>About Me</h1>
      <h2>My name is {name}</h2>
      <p>I am {age} years old.</p>
      <p>I enjoy drawing, gaming, and learning to code.</p>

      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
