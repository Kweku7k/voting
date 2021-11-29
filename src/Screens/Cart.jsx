import React from 'react'
import { Container } from 'react-bootstrap'
import Counter from '../components/Counter'

const Cart = () => {
    return (
        <>
            <Container>
                <div className="cartItem">
                    <img src="#"/>
                    <div>
                        <h4><b>Header</b></h4>
                        <h6>Header</h6>
                    </div> 
                    <div>
                        <Counter/>
                    </div>  
                </div>
            </Container>
        </>
    )
}

export default Cart
