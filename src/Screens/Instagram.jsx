import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import Post from '../components/Post';


const Instagram = () => {
const access_token = 'IGQVJWTUhtQ3JoN0ViNm9IRDNwclVVT0lhQ2JnMzlpTUFzRzlaekEtMmdfcFgtc2pHR1ZADbm1HcldRT0gzdC1fQktnT0FXUENjVmFXRXRoYXJkVmJ4WWZAKRFdXU2tGdmUyTEpZAYk96b1BrY1NvQ3BlMQZDZD'
const [posts, setposts] = useState([
{
    "id": "17934647698581558",
    "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/217968118_986593545448960_5406088763550514707_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=0nDo8Cp9Y-AAX8qmZ-4&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=705bf2e532203e4cae3e938cd5741404&oe=618A74BF",
    "caption": "TRANQUILITY🦚🏔"
},
{
    "id": "17934647698581558",
    "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/217968118_986593545448960_5406088763550514707_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=0nDo8Cp9Y-AAX8qmZ-4&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=705bf2e532203e4cae3e938cd5741404&oe=618A74BF",
    "caption": "TRANQUILITY🦚🏔"
}])

    useEffect(() => {
    axios.get(`https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${access_token}`).then((res)=> {
        console.log(res.data.data)
        setposts(res.data.data)
    })
    }, [])

    const profilepic = "LOL"

    const check = (post) => {
        console.log(post.media_url)
    }



    // {posts.map((post)=>(
    //    <h4>{post.media_url}</h4>
    // ))}
    return (
        <>
           <Container >
               <Row> 
                <div className="ellipse">
                    {/* <img src={profilepic}/> */}
                </div>
                <h2>Name</h2>

               </Row>
                <Row>
                {posts.map((post)=>(
                    <Col xs="4" md='4' >
                    <Post onClick={check(post)} media={post.media_url} />
                    </Col>
                    // <h4>{post.media_url}</h4>
                ))}
                    
                   
                </Row>
           </Container>
        </>

    )
}

export default Instagram
