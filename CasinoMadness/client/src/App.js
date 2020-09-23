import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import GamePreview from './components/layouts/GamePreview';
import Footer from './components/layouts/Footer';
import './App.css';



function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Navbar />
        <div className="body">
          <GamePreview msg="Join the fun with 5 Card Draw. Try your luck against the house." theme="Harley Quinn and Joker" img="poker"
          />
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
