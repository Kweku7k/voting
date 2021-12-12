import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'react-router-dom'


const Cartheader = () => {
    return (
        <>
            <div style={{backgroundColor:'white', alignItems:'center', padding:'auto 50',display:'flex', justifyContent:'space-between'}}>

<div style={{display:'flex' , width:'fit-content',height:'10vh', backgroundColor:'white', padding:'20px'}}>
<img className="logo" src="https://firebasestorage.googleapis.com/v0/b/fir-learning-35a38.appspot.com/o/evic%20LOGOo-03.png?alt=media&token=d9d6616c-b0d7-4510-9841-39c8527b8102"/>
<div>
<h4 style={{marginBottom:0}}><b>@evic.store</b></h4>
<h4>evic</h4>
</div>
</div>


<Link style={{color:'black'}} to="/cart">
<FontAwesomeIcon style={{marginRight:20}} size="lg" icon={faShoppingBag}/>
</Link>
</div>
        </>
    )
}

export default Cartheader
