import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {Link, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <>
      <li>
        <Link to='/'>HOME</Link>
      </li>
      <li>
        <Link to='/about'>ABOUT</Link>
      </li>
      <li>
        <Link to='/contact'>CONTACT</Link>
      </li>
      </>

      <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route exact path='/about'>
            <About/>
        </Route>
        <Route exact path='/contact'>
            <Contact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
