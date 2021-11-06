import React from 'react'
import {Link} from 'react-router-dom'


const Post = ({media}) => {
    return (
        <div className="col-md-4">
            <img src={media} width='100%'/>
        </div>
    )
}

export default Post
