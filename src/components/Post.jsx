import React from 'react'
import {Link, useHistory} from 'react-router-dom'



const Post = ({media, wooUrl,media_type, id}) => {

    let history = useHistory();
    
    return (
        <div style={{backgroundColor:'white', height:'28vw',width:'28vw', marginBottom:"5vw"}}  >
            {/* <img onClick={()=>window.open("https://www.google.com")} src={media} className="igPost"/> */}
            <img onClick={()=>(window.location.href = wooUrl)} src={media} className="igPost"/>
        </div>


        // <div style={{backgroundColor:'white', borderRadius:10}} className="col-md-4 col-sm-4"  >
        //     <img onClick={()=>history.push(`/evic/${id}`)} src={media} className="igPost"/>
        // </div>


        // <div style={{backgroundColor:'#c4c4c4', borderRadius:10}} className={ wooUrl == "null" ? "igPost" : "activePost"}  >
        //     {media_type == "VIDEO" ? 
        //     <video muted loop autoPlay={false} src={media + '#t=0.1'} className="igPost" width='100%' height='100%'>
        //     </video>
        //     :
        //     <img src={media} className="igPost" width='100%'/>

        // }
        // </div>
    )


//     <video width="300" height="150">
//    <source src="testvideo.mp4#t=0.1" type="video/mp4" />
// </video>
}

export default Post
