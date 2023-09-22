import React from 'react';

export const CharactersList = ({data}) => (
  <ul>
    {data?.map(({id, name}) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);
