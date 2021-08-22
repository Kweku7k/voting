import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import { Link, Route, useHistory } from 'react-router-dom';
import Card from '../components/eCard';
import Header from '../components/Header';



const LandingPage = () => {

    const link = {
        textDecoration:'none',
        color:'black'
    }
    
    let history = useHistory()

    const [elections, setElections] = useState([{
        id:1,
        name:"Face Of Central University",
        candidates:['One,Two,Three'],
        organisationNickName:"centraluniversity",
        image:'https://images.unsplash.com/photo-1494172892981-ce47ca685eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
    },
    {
        id:2,
        name:"Ashesi Central Main",
        candidates:['Foru,Two,Three'],
        organisationNickName:"legon",
        image:'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'

    }]
    )


    return (
        <>
        <Container>
            <Header title="All Ongoing Elections" sub="Choose and election and proceed to vote for your favourite contestant"/>
                <br/>
            <Route path="/el">
                <Card image='https://images.unsplash.com/photo-1494172892981-ce47ca685eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' sub="Elections" main="Election One"/>
            </Route>

            {elections.map(election =>(
                <Link style={link} to={`/${election.organisationNickName}`}>
                    <Card onClick={()=>history.push('/category')} image={election.image}  sub="Elections" main={election.name}/>
                </Link>
                
            ))}
                <br/>
            <Card onClick={()=>history.push('/category')}  sub="Elections" main="Election Two"/>

        </Container>

        </> 
    )
}

export default LandingPage
