import React, { useEffect, useState } from 'react';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/?format=json')
      .then(response => response.json())
      .then(data => setPlanets(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Planets</h1>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            {planet.name} | Population: {planet.population}
          </li>
          ))}
      </ul>
    </div>
  );
}

export default App;