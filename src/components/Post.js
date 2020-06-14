import React from 'react'

class Post extends React.Component {
    render() {
        return (
            <div className='col-xl-4'>
                <div className='card shadow border-0 mb-4'>
                    <div className='card-header'>{ this.props.post.title }</div>
                    <div className='card-body'>
                        <p>{ this.props.post.body }</p>
                    </div>
                    <div className='card-footer'>{ this.props.user.name }</div>
                </div>
            </div>
        )
    }
}

export default Post