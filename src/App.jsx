import { useState } from 'react';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

function App() {
  const isValid = true;

  return (
    <>
      <div>
        <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' />
      </div>
    </>
  )
}

export default App
