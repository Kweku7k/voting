import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Cartheader = () => {
    return (
        <>
            <div style={{backgroundColor:'white', alignItems:'center', padding:'auto 50',display:'flex', justifyContent:'space-between'}}>

<div style={{display:'flex' , width:'fit-content',height:'10vh', backgroundColor:'white', padding:'20px'}}>
<img className="logo" src="https://i0.wp.com/gsu.qhx.mybluehost.me/wp-content/uploads/2021/11/Black-and-White-Pussy-Bow-Blouse.jpg?fit=1512%2C2016&ssl=1"/>
<div>
<h4 style={{marginBottom:0}}><b>@evic.store</b></h4>
<h4>evic</h4>
</div>
</div>

<FontAwesomeIcon size="lg" icon={faShoppingBag}/>
</div>
        </>
    )
}

export default Cartheader
