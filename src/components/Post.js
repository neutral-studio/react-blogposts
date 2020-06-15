import React from 'react';

class Post extends React.Component {
  render() {
    if(this.props.dati.userId === this.props.autore.id){
    return (
      <div className="col-xl-4">
        <div className="card shadow border-0 mb-4">
          <div className="card-header">{this.props.dati.title}</div>
          <div className="card-body">
            <p>{this.props.dati.body}</p>
          </div>
          <div className ="card-footer">{this.props.autore.name}</div>
        </div>
      </div>
    );
    }
    else{
      return(null);
    }
  }
}

export default Post;
