import React from 'react'

const Counter = () => {
    const input ={
        border:'none',
        width:'fit-content'
    }

    const button = {
        color:'green'
    }
    
    return (
        <div >

        <div style={{display:'flex'}}>
            <div className="ellipse">
                +
            </div>
            <div style={{textAlign:'center', margin:0}}>
                <input type="number" style={input}/>
                <h6>VOTES</h6>
            </div>
            <div className="ellipse" style={button}>
                -
            </div>
        </div>
        </div>

    )
}

export default Counter
