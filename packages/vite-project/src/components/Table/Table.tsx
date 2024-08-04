import { useEffect } from 'react';
import { getPlanets, planets } from '../../_store/getPlanets.ts';

export const Table = () => {
  useEffect(() => {
    getPlanets();
  }, []);
  const bodyJSX = planets.value.map((data) => (
    <tr key={data.name}>
      <td>{data.name}</td>
      <td>{data.population}</td>
      <td>{data.rotation_period}</td>
      <td>{data.climate}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Planet Name</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Climate</th>
        </tr>
      </thead>
      <tbody>{bodyJSX}</tbody>
    </table>
  );
};
