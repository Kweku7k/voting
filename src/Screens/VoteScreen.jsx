import React from 'react'
import { Container } from 'react-bootstrap'
import Counter from '../components/Counter'
import Header from '../components/Header'

const VoteScreen = () => {
    return (
        <>
        <Container>
            <Header title="Category Name" />

            <div className="ellipse"></div>
                <h6>CANDIDATE NAME IN FULL</h6>
                <Counter/>
        </Container>
        </>
    )
}

export default VoteScreen
