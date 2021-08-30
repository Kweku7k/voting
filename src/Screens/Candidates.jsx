import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import Card from '../components/eCard'
import Header from '../components/Header'

const Candidates = () => {

    const [candidates, setcandidates] = useState([{
        id:1,
        name:"Face Of Central University",
        candidates:['One,Two,Three'],
        organisationNickName:"centraluniversity",
        image:'https://images.unsplash.com/photo-1494172892981-ce47ca685eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
    },
    {
        id:2,
        name:"Ashesi Central Main",
        candidates:['Form,Two,Three'],
        organisationNickName:"legon",
        image:'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'

    }])
    return (


        <>
            <Container>
                <Header title="All Your Candidates" sub="Elect your fav"/>
                {
                    candidates.map(candidate => {
                        <h4>candidate.name</h4>
                    })
                }
                <Card main="Candidate Name" sub="Number of votes so far" />
            </Container>   
        </>
    )
}

export default Candidates
