import React, { Component } from 'react';
import Home from './components/sections/Home/Home';
import Detail from './components/sections/Detail/Detail';
import CreateNew from './components/CreateNew/CreateNew';
import Lightbox from './components/Lightbox/Lightbox';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorFallback from './components/ErrorFallback';

import './App.css';
class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      section: '',
      routes: {
        'home': <Home></Home>,
        'detail': <Detail></Detail>,
        '': <Home></Home>
      },
    }
  }

  /**
   * Set the current section in state
   * @param {*} hash 
   */
  setStateByHash(hash) {
    let route = hash.split('/');

    this.setState({
      ...this.state,
      section: ''
    });

    this.setState(
      {
        section: route.shift(),
        routes: {
            ...this.state.routes,
            'detail': <Detail id={route[0]}></Detail>
        }
      });
  }

  // lifecycle
  componentWillMount() {
    this.setStateByHash(location.hash.replace('#/', ''));

    window.addEventListener("hashchange", (ev) => {
      this.setStateByHash(location.hash.replace('#/', ''));
    });
  }

  getViewByState() {
    return <main>{this.state.routes[this.state.section] || <ErrorFallback></ErrorFallback>}</main>;
  }

  // Renders
  render() {
    return (
      <div className="app">
        <Header links={{ home: true }} section={this.state.section}></Header>
        <Lightbox>
          <h1>New Article</h1>
          <CreateNew></CreateNew>
        </Lightbox>
        {this.getViewByState()}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
