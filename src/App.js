import React, {useState} from 'react';
import './App.css';
import Form from './components/UI/Form';

function App() {

  const OnSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <section className='container'>
        <h1>User Information App</h1>
        <Form/>
    </section>
    
  );
}

export default App;
