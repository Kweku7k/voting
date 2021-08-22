import React from 'react'

const Header = ({title, sub}) => {
    return (
        <>
            <div style={{marginTop:20, marginBottom:20}}>
            <h4>{title}</h4>
            <h6 className="text-muted">{sub}</h6>
            </div>
        </>
    )
}

export default Header
