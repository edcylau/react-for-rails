import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div className="slide-container">
        <span id="slider-image-1"></span>
        <span id="slider-image-2"></span>
        <span id="slider-image-3"></span>
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1583308436636-238b4eabfb3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1060&q=80&q=80" className="slider-image"/>
          <img src="https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1060&q=80" className="slider-image"/>
          <img src="https://images.unsplash.com/photo-1584474280023-d85a18aad4a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1060&q=80" className="slider-image"/>
        </div>
        <div className="button-container">
          <a href="#slider-image-1" className="slider-button"></a>
          <a href="#slider-image-2" className="slider-button"></a>
          <a href="#slider-image-3" className="slider-button"></a>
        </div>
      </div>
    );
  }
}

export default Landing;
