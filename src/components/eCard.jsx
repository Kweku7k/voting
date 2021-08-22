import React from 'react'

const Card = ({main, sub, image}) => {
    return (
        <>
        <div className="eCard">
            <div className="ellipse">
                <img src={image} width='auto' alt="img"/>
            </div>
            <div className="cardDetails">
                <h4>{main}</h4>
                <h6 className="text-muted">{sub}</h6>
            </div>
        </div>
        </>
    )
}

export default Card
