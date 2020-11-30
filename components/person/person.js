import React from 'react';
import { useParams } from 'react-router-dom';

export default function Person() {

  const { id } = useParams();
  
  return (
    <div>
      <h2>PERSON LAA</h2>
      <h4>{id}</h4>
    </div>
  );
}