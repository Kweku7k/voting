import React from 'react'
import {Link} from 'react-router-dom'
import { faHome, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faToogleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AdminPost = ({media, wooUrl,media_type, status, changeState}) => {
    return (
        <>
        <div style={{backgroundColor:'white', borderRadius:10, paddingBottom:'50px'}} className="tile"  >
            <img src={media} className="igPost" width='100%'/>
        <div className="controlBox">
        <h6 className="text-muted">{status}</h6>
        {
            status === 'publish'
            ?
            <FontAwesomeIcon onClick={()=>changeState()} icon={faToggleOn}/>
            :
            <FontAwesomeIcon onClick={()=>changeState()} icon={faToggleOff}/>
        }
        </div>  
        </div>
        </>

        
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

export default AdminPost
