import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      title: 'React demo app'
    }
  }

  // lifecycle
  componentWillMount() {
  }

  // Renders
  render() {
    return (
      <footer className="Footer" >
        Billin
      </footer>
    );
  }
}

export default Footer;