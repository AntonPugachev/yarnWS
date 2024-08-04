import { useEffect } from 'react';
import { getPlanets, planets } from '../../_store/getPlanets.ts';

export const Table = () => {
  useEffect(() => {
    getPlanets();
  }, []);
  const bodyJSX = planets.value.map((data) => (
    <tr>
      <td>{data.name}</td>
      <td>{data.population}</td>
      <td>{data.rotation_period}</td>
      <td>
        <img src={data.url} alt='Picture of the planet' />
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Planet Name</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>{bodyJSX}</tbody>
    </table>
  );
};
