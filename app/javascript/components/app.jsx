import React, { Component } from 'react'
import Landing from './landing.jsx'
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl'
import Main from './main.jsx'
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="My Portfolio" scroll>
              <Navigation>
                  <Link to="/project">Project</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about">About</Link>
              </Navigation>
          </Header>
          <Drawer title="My Portfolio">
              <Navigation>
                  <Link to="/project">Project</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about">About</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App
