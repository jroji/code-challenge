import React, { Component } from 'react';
import { connect } from 'react-redux';
import LightboxActions from '../../stateManagement/actions/lightbox.actions';
import { addArticle } from '../../stateManagement/thunks/Articles.thunks';

import './CreateNew.css';

const initialState = {
  author: '',
  title: '',
  excerpt: '',
  content: '',
  tags: ''
};

class CreateNew extends Component {

  componentWillMount() {

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { ...initialState };

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: name === 'tags' ? value.split(',') : value
    });
  }

  createNew(ev) {
    if (this.refs.newForm.checkValidity()) {
      ev.preventDefault();
      this.props.addArticle(this.state);
      this.props.toggleLightbox();
    } else {
      this.refs.newForm.className = 'Form validated';
    }
  }
  // Renders
  render() {
    return (
      <form ref="newForm" className="Form">
        <div className="Form__group">
          <input
            placeholder="Author"
            onChange={this.handleInputChange}
            name="author"
            className="Form__input"
            id="author"
            required></input>
        </div>
        <div className="Form__group">
          <input
            placeholder="Title"
            onChange={this.handleInputChange}
            name="title"
            className="Form__input"
            id="title" required></input>
        </div>
        <div className="Form__group">
          <textarea
            placeholder="Excerpt"
            onChange={this.handleInputChange}
            name="excerpt"
            className="Form__input Form__input--textarea"
            id="excerpt" required></textarea>
        </div>
        <div className="Form__group">
          <textarea
            placeholder="Content"
            onChange={this.handleInputChange}
            name="content"
            className="Form__input Form__input--textarea"
            id="content"
            required></textarea>
        </div>
        <div className="Form__group">
          <input
            placeholder="Tag1,Tag 2,Tag3"
            onChange={this.handleInputChange}
            name="tags"
            className="Form__input"
            id="tags"></input>
        </div>
        <input onChange={this.handleInputChange} onClick={(ev) => { this.createNew(ev) }} className="Form__send" type="submit" value="Send"></input>
      </form>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  addArticle: (article) => { dispatch(addArticle(article)); },
  toggleLightbox: () => { dispatch(LightboxActions.TOGGLE()); }
});

export default connect(
  null, mapDispatchToProps
)(CreateNew)
