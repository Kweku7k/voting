import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Category from '../components/Category'
import Header from '../components/Header'
const Categories = () => {

    let { el } = useParams();

    const [candidates, setcandidates] = useState([{
        id:1,
        name:"Face Of Central University",
        candidates:[{
            name:'Nana Kweku Adumatta',
            category:'Executive President',
        }],
        organisationNickName:"centraluniversity",
        image:'https://images.unsplash.com/photo-1494172892981-ce47ca685eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
    },
    {
        id:2,
        name:"Ashesi Central Main",
        candidates:[{
            name:'Maame Esi',
            category:'Executive Security'
        }],
        organisationNickName:"legon",
        image:'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'

    }])

    return (
        <>
        <Container>
            <Header title="Ghana Surf Club Elite Evictions" sub="Choose and election and proceed to vote for your favourite contestant"/>
        
            {/* {candidates[0].map(candidate => ( */}
            <Link to={`/${el}/vote`}>
            <Category cname="Men"/> 
            </Link>
            <Category cname="Women"/> 
            <Category cname="Children"/> 
            {/* ))} */}

        </Container>
        </>
    )
}

export default Categories
