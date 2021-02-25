import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Affix } from 'antd';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Affix offsetTop='0'>
        <Navigation />
      </Affix>
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route path = '/about'>
            <About />
          </Route>
          <Route path = '/projects'>
            <Projects />
          </Route>
          <Route path = '/blog'>
            <Blog />
          </Route>
        </Switch>
      </Router>
      <Affix offsetBottom='0'>
        <Footer />
      </Affix>
    </div>
  );
}

export default App;
