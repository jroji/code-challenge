import React, { Component } from 'react';
import { ARTICLES_MUTATION } from '../../queries';
import request from '../../request';
import { connect } from 'react-redux';
import ArticleActions from '../../stateManagement/actions/articles.actions';
import LightboxActions from '../../stateManagement/actions/lightbox.actions';

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
    this.state = {...initialState};

  }

  newRequest(data) {
    request(ARTICLES_MUTATION.Add(data)).then(response => {
      this.props.addArticle(response.data.add);
    });
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
    if(this.refs.newForm.checkValidity()) {
      ev.preventDefault();
      this.newRequest(this.state);
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
  addArticle: (article) => { dispatch({ type: ArticleActions.ADD, payload: article }) },
  toggleLightbox: () => { dispatch({ type: LightboxActions.TOGGLE }) }
});

export default connect(
  null, mapDispatchToProps
)(CreateNew)
