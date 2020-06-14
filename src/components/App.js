import React from 'react'

import ListaPost from './ListaPost'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='jumbotron my-4'>
                    <h3>Facciamo chiamate asincrone</h3>
                    <p>Proprio così</p>
                </div>
                <div>
                    <p>Qui va la lista dei post</p>
                </div>
                <ListaPost />
            </div>
        )
    }
}

export default App