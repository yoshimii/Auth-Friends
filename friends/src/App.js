import React from 'react';
import logo from './logo.svg';
import { Route, Switch, Link } from 'react-router-dom';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/login'>login</Link>
        <Link to='/register'>register</Link>
        <Form />
        </header>
    </div>
  );
}

export default App;
