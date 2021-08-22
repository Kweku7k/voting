import React from 'react'
import { Container } from 'react-bootstrap'
import Card from '../components/eCard'
import Header from '../components/Header'

const Candidates = () => {
    return (
        <>
            <Container>
                <Header title="All Your Candidates" sub="Elect your fav"/>
                <Card main="Candidate Name" sub="Number of votes so far" />
            </Container>   
        </>
    )
}

export default Candidates
