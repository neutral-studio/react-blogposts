import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import faker from 'faker';

import { getPosts } from '../redux/actions';
import {getUtente} from '../redux/actions';
import Post from './Post';

class ListaPost extends React.Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getUtente();
  }

  renderLista() {
    //spinner nel caso di post o autore vuoto
    if (!this.props.posts || !this.props.utente)
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );

    return _.values(this.props.posts).map(post => {

      return _.values(this.props.utente).map(utente => {
        return <Post dati={post} utente = {utente} key={faker.random.uuid()} />;
      });
      
    });
  }

  render() {
    return (
      <div>
        <h4>Lista Posts</h4>
        <hr className="my-4" />
        <div className="row">{this.renderLista()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts, utente: state.utente };
};

export default connect(mapStateToProps, { getPosts, getUtente })(ListaPost);
