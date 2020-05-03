import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = () => <div>Users</div>;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/users' component={Users} />
      </BrowserRouter>
    </div>
  );
}

export default App;
