import React, {useState} from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Counter from '../components/Counter'
import Header from '../components/Header'

const VoteScreen = () => {

    const [count, setcount] = useState(0)
    const [voting, setvoting] = useState(false)

    const voteNow = () => {
        setvoting(true)
    }
    return (
        <>
        <Container>
           <h4>Candidate Name</h4>
        <br/>

        <div style={{display:'flex', justifyContent:"space-around"}}>
            <div className="ellipse" style={{width:100, height:100}}></div>
        </div>

<div style={{margin:30}}>
        <h6 style={{textAlign:'center'}}><b>NANA KWEKU ADUMATTA</b></h6>
        <h6 style={{textAlign:'center'}}>Gentleman</h6>
</div>

        <Counter count={count} increase={()=>setcount(count + 1)} decrease={()=>setcount(count - 1)}/>
        
        <div className="ButtonBottom" style={{textAlign:'center'}}>
            
            {
                voting
                ?
            <button className="button" style={{backgroundColor:'#1a357a7a'}}>
                <Spinner animation="border" size="sm" />
                 {' '}Voting
            </button>
                :
            <button onClick={()=>voteNow()} className="button" style={{backgroundColor:'#1A357A'}}>
                Vote Now
            </button>
            }
        </div>
        </Container>

        </>
    )
}

export default VoteScreen
