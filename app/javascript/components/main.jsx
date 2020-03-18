import React from 'react';
import Landing from './landing.jsx';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Resume from './resume';
import Project from './project';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing}/>
    <Route path="/about" component={About}/>
    <Route path="/project" component={Project}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/contact" component={Contact}/>
  </Switch>
)

export default Main;
