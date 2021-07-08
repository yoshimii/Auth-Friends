import React from 'react';
import logo from './logo.svg';
import { Route, Switch, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/login'>login</Link>
        {/* <Link to='/addfriend'>add friend</Link> */}
        <PrivateRoute exact path='/friends'component={FriendsList} />
        <PrivateRoute exat path='/addfriend' component={FriendForm} />
        <Route exact path='/login' render={(props) => {return (<LoginForm {...props}/>)}} />
        <Route exact path='/' render={(props) => {return (<Home {...props}/>)}} />
        
        </header>
    </div>
  );
}

export default App;
