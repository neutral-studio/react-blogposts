import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import faker from 'faker'

import { getPosts } from '../redux/actions'
import { getUsers } from '../redux/actions'

import Post from './Post'

class ListaPost extends React.Component {

    // appena renderizzato chiama l'API
    componentDidMount() {
        this.props.getPosts()
        this.props.getUsers()
    }

    renderLista() {
        if (!this.props.posts)
            return (
                <div className='spinner-border' role='status'>
                    <spin className='sr-only'>Loading ...</spin>
                </div>
            )
        

        /* if (this.props.users != null) */

        return _.values(this.props.posts).map(post => {

                /* _.values(this.props.users).forEach(user => {
                    if (user.id === post.userId) {
                        tUser = user
                        console.log(user.id)
                    }  
                }) */

            return _.values(this.props.users).map(user => {
                if (user.id === post.userId) {
                    //tUser = user
                    console.log(user.id)

                    return <Post post={post} user={user} key={faker.random.uuid()} />  
                }

                /* return <Post post={post} user={temp} key={faker.random.uuid()} />   */ 
                return true
            })
        })
    }


    render() {
        return (
            <div>
                <h4>Lista Posts</h4>
                <hr className='my-4' />
                <div className='row'>{ this.renderLista() }</div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { posts: state.posts, users: state.users }
}

export default connect(mapStateToProps, { getPosts, getUsers })(ListaPost)