import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Lightbox.css';
import LightboxActions from './../../stateManagement/actions/lightbox.actions';

class Lightbox extends Component {

  // lifecycle
  componentWillMount() {
    this.getClass = this.getClass.bind(this);
  }

  getClass() {
    return this.props.status ? 'Overlay' : 'Overlay Overlay--hidden';
  }


  // Renders
  render() {
    return (
      <div className={this.getClass()} onClick={(ev) => { this.props.toggleLightbox() }}>
        <div className="Dialog" onClick={(ev) => { ev.stopPropagation() }}>
          <button className="Dialog__close" onClick={(ev) => { this.props.toggleLightbox() }}>X</button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  toggleLightbox: () => { dispatch(LightboxActions.TOGGLE()) }
});

let mapStateToProps = state => ({
  status: state.lightbox
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Lightbox)