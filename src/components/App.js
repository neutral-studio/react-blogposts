import React from 'react';

import ListaPost from './ListaPost';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron my-4">
          <h3>Facciamo Cose Asincrone, con Redux</h3>
          <p>Eh già, è proprio così</p>
        </div>
        <ListaPost />
      </div>
    );
  }
}

export default App;
