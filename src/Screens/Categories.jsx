import React from 'react'
import { Container } from 'react-bootstrap'
import Category from '../components/Category'
import Header from '../components/Header'
const Categories = () => {
    return (
        <>
        <Container>
            <Header title="Ghana Surf Club Elite Evictions" sub="Choose and election and proceed to vote for your favourite contestant"/>
        
            <Category cname="Men"/> 
            <Category cname="Women"/> 
            <Category cname="Girls"/> 
            {/* <div>
                Home and e
            </div> */}
        </Container>
        </>
    )
}

export default Categories
