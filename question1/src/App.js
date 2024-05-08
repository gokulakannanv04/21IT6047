import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);

  const fetchNumbers = async (numberId) => {
    try {
      const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTY1MTcwLCJpYXQiOjE3MTUxNjQ4NzAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjYxOGYzNTE4LTEyY2QtNDBkZi05MmE5LTA4Mjc5MzVhZjkxZiIsInN1YiI6Imdva3VsYWthbm5hbnYwNEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJHSyBUZWNoIiwiY2xpZW50SUQiOiI2MThmMzUxOC0xMmNkLTQwZGYtOTJhOS0wODI3OTM1YWY5MWYiLCJjbGllbnRTZWNyZXQiOiJjT1pLVk5BZE96aFl3bnZQIiwib3duZXJOYW1lIjoiR09LVUxBIEtBTk5BTiBWIiwib3duZXJFbWFpbCI6Imdva3VsYWthbm5hbnYwNEBnbWFpbC5jb20iLCJyb2xsTm8iOiI5MjI1MjEyMDUwNDcifQ.CsI1Of-wV7xzQNaeDq-w6zmsGhq096MMWVpuqCoIu_c'; // Replace 'your_access_token_here' with your actual access token
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
  
      const response = await axios.get(`http://20.244.56.144/test/${numberId}`, { headers });
      const newNumbers = response.data.numbers;
      setNumbers(newNumbers);
  
      // Calculate average if the length of newNumbers is greater than 0
      if (newNumbers.length > 0) {
        const sum = newNumbers.reduce((acc, num) => acc + num, 0);
        const avg = sum / newNumbers.length;
        setAverage(avg);
      }
    } catch (error) {
      console.error('Error fetching numbers:', error.message);
    }
  };
  

  return (
    <div>
      <button onClick={() => fetchNumbers('primes')}>Fetch Primes</button>
      <button onClick={() => fetchNumbers('fibo')}>Fetch Fibonacci</button>
      <button onClick={() => fetchNumbers('even')}>Fetch Even</button>
      <button onClick={() => fetchNumbers('rand')}>Fetch Random</button>

      <h2>Numbers:</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      {average !== null && (
        <div>
          <h2>Average:</h2>
          <p>{average}</p>
        </div>
      )}
    </div>
  );
};

export default App;
