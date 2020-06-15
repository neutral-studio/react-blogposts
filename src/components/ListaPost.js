import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import faker from 'faker';

import { getPosts } from '../redux/actions';
import Post from './Post';  

import { getAutore } from '../redux/actions';

class ListaPost extends React.Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getAutore();
  }

  renderLista() {

    if (!this.props.posts || !this.props.Autore)
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );

    
      
    return _.values(this.props.posts).map(post => {
      return _.values(this.props.Autore).map(autore =>{
        return <Post dati={post} autore = {autore} key={faker.random.uuid()}  />;

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
  return { 
      posts: state.posts,
      Autore: state.autore
  };
};

export default connect(mapStateToProps, { 
    getPosts,
    getAutore
  })(ListaPost);
