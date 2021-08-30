import React,{useState} from 'react'
import { Container } from 'react-bootstrap'

const Counter = ({count, increase, decrease}) => {
    const input ={
        border:'none',
        width:'30',
        backgroundColor:'transparent',
        textAlign:'center'
    }


    // const increase = (count) => {
    //     console.log(count)
        
    // }
   
    return (
        <>
        <div style={{marginLeft:'auto', marginRight:'auto', width:'fit-content'}} >

        <div style={{display:'flex'}}>
            <div className="ellipse" onClick={()=>increase()} style={{color:'white', padding:10}}>
                <h4 style={{textAlign:'center'}}>+</h4>
            </div>
            <div style={{textAlign:'center', margin:0}}>
                <input type="number" value={count} style={input}/>
                <h6>VOTES</h6>
            </div>
            <div className="ellipse" onClick={()=>decrease()} style={{color:'white', padding:10}}>
                <h4 style={{textAlign:'center'}}> - </h4>
            </div>
        </div>
        </div>
       
        </>

    )
}

export default Counter
