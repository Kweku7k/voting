
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Post from '../components/Post';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {getStorage} from "firebase/storage"
import { getDatabase, ref, set, get, child, onValue } from "firebase/database";




export const AddPost = () => {

    const [posts, setposts] = useState([])

const firebaseConfig = {
    apiKey: "AIzaSyDnvuL0QHZKLg9NAjnH86RqOtLxp03o-U0",
    authDomain: "fir-learning-35a38.firebaseapp.com",
    projectId: "fir-learning-35a38",
    storageBucket: "fir-learning-35a38.appspot.com",
    messagingSenderId: "405512595691",
    appId: "1:405512595691:web:7226e34538a9651a81f6ae",
    measurementId: "G-47LJTYWD6N"
};


const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const db = getDatabase(app);



    let { postBody } = useParams();
    console.log(postBody)

    function getAllPosts(){
        console.log("Starts to get all posts")
        const dbRef = ref(getDatabase());
        get(child(dbRef, `post/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            console.log(typeof(snapshot.val()))
            setposts(snapshot.val())
        } else {
            console.log("No data available");
        }
        console.log("Done")
        console.log(typeof(posts))
        }).catch((error) => {
        console.error(error);
        });
        return
    }

const [selectedPost, setselectedPost] = useState({
    caption: "Test Caption",
    mediaUrl: "https://video.cdninstagram.com/v/t50.16885-16/255877059_1340030699750804_4020931600262146809_n.mp4?_nc_cat=100&vs=17901211139247149_25858474…",
    wooUrl: "None Available default"
})

    const [input, setinput] = useState(selectedPost ? selectedPost.wooUrl : "nullaf")


    useEffect(() => {
        getAllPosts()
        console.log(typeof(posts))

        const starCountRef = ref(db, 'post/' + postBody );
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log("data")
        console.log(data)
        setselectedPost(data)
        setinput(data.wooUrl)
        });
    }, [])




    function updatePost(id, wooUrl) {
        const db = getDatabase();
        set(ref(db, 'post/' + id), {
            id: id,
            caption:selectedPost.caption,
            mediaUrl:selectedPost.mediaUrl,
            wooUrl: wooUrl
          })
      
          .then(() => {
            console.log("Data saved successfully!")
          })
          .catch((error) => {
            console.log("The write failed...")
          });
      }

    const submit = () => {
        console.log("Clicked on submit")
        updatePost(postBody, input)
    }

    return (
        <>
           <Container >
               <Row>
                    <Post media={selectedPost.mediaUrl} media_type={selectedPost.media_type}/>
                   <small>Description:</small>
                   <small><b>{selectedPost.caption}</b></small>
                   <br/>
                   <small>Woo Url</small>
                   <input type="text" onChange={(e)=> setinput(e.target.value)} value={input == "null" ? "" : input} />
                   <br/>
                   <button className="button" onClick={()=>submit()}>Update Post</button>
                   <h4 ></h4>
               </Row>
           </Container>
        </>
    )
}
