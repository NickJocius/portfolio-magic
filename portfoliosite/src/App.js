import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Works from './components/Works';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {



  return (
    <Router>
      <div className="App container-fluid">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/works" component={Works}></Route>
          <Route exact path="/resume" component={Resume}></Route>
        </Switch>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
