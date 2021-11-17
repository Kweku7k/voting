import React from 'react'
import {Link} from 'react-router-dom'


const Post = ({media, wooUrl,media_type}) => {
    return (
        <div className={ wooUrl == "null" ? "igPost" : "activePost"}  >
            {media_type == "VIDEO" ? 
            <video muted loop autoPlay="true" src={media} className="igPost" width='100%' height='100%'></video>
            // <h4>{media_type}</h4>
            :
            <img src={media} className="igPost" width='100%'/>

        }
        <h4>{wooUrl}</h4>
        </div>
    )
}

export default Post
