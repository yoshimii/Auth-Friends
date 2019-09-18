import React from 'react';
import logo from './logo.svg';
import { Route, Switch, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/login'>login</Link>
        <Link to='/register'>register</Link>
        <PrivateRoute exact path='/friends' 
        // render={(props) => {return (<FriendsList {...props}/>)}}
        component={FriendsList}    
        />
        <Route exact path='/login' render={(props) => {return (<LoginForm {...props}/>)}} />
        <Route exact path='/' render={(props) => {return (<Home {...props}/>)}} />
        
        </header>
    </div>
  );
}

export default App;
