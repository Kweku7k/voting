import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Post from '../components/Post';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {getStorage} from "firebase/storage"
import { getDatabase, ref, set, get, child, onValue } from "firebase/database";
import ErrorScreen from './ErrorScreen';



const WooCommerce = () => {  

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
const db = getDatabase(app);

function writeUserData(postId, mediaUrl, caption, wooUrl, media_type) {
    const db = getDatabase();
    console.log("write user data started")
    set(ref(db, 'post/' + postId), {
        mediaUrl: mediaUrl,
        caption: caption,
        wooUrl: wooUrl,
        media_type: media_type
    });
    console.log("Data " + postId + " completed") 

    }

function updateDb(postId, mediaUrl, caption, wooUrl) {
    const db = getDatabase();
    console.log("write user data started")
    set(ref(db, 'post/' + postId), {
        mediaUrl: mediaUrl,
        caption: caption,
        wooUrl: wooUrl
    });
    console.log("Data " + postId + " completed")
    }

    const [gottenPosts, setgottenPosts] = useState({})

    const [loading, setloading] = useState(true)

const [postsFromDatabase, setpostsFromDatabase] = useState([])

let dbArray = []
    // Get All Saved Info From DB
    function getAllPosts(){
    console.log("Starts to get all posts")
    const dbRef = ref(getDatabase());
    get(child(dbRef, `post/`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
        // console.log(typeof(snapshot.val()))
        // setpostsFromDatabase(snapshot.val)
        // setpostsFromDatabase([...postsFromDatabase, snapshot.val()])
        // db   Array.push(snapshot.val())
        // console.log(JSON.parse(snapshot.val()))
        console.log("snapshotToArray(snapshot.val)")
        console.log(snapshotToArray(snapshot))
        // setposts(snapshotToArray(snapshot))
        // setloading(false)  
        console.log(posts)
    } else {
        console.log("No data available");
    }
    console.log("Done")
    console.log(typeof(posts))
    }).catch((error) => {
    console.error(error);
    });

    console.log("posts")
    console.log(posts)
    return
}

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.id = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

// const changeToArray = (object) => {
//     console.log("changeToArray")
// const array = [];
// for (let i = 0; i < object.length; i++) { 
//     console.log(object)
// }

// Object.keys(object).forEach((key) => {
//   array.push({
//       [key]: object[key]
//     });
// });

// console.log(array)
// }



function writeNewPost(uid, newWooUrl) {
    console.log("Writing Post")
    const db = getDatabase();
  
    const postData = {
      wooUrl: newWooUrl,
    //   body: body,
    //   title: title,
    //   starCount: 0,
    //   authorPic: picture
    };
  
    // const newPostKey = push(child(ref(db), 'posts')).key;
  
    const updates = {};
    updates['/posts/' + uid] = postData;
    // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
    
    // return update(ref(db), updates);

  }


//   writeNewPost('17844540536114074', "nottest")
      

// function writeUserData(accountId, name, email, imageUrl) {
//     const db = getDatabase();
//     console.log("write user data started")
//     set(ref(db, 'account/' + accountId), {
//         username: name,
//         email: email,
//         profile_picture : imageUrl
//     });
//     }

// const database = getDatabase(app);

    
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList)
  return cityList;
}

let history = useHistory();

// Nana Kweku
// const access_token = 'IGQVJWTUhtQ3JoN0ViNm9IRDNwclVVT0lhQ2JnMzlpTUFzRzlaekEtMmdfcFgtc2pHR1ZADbm1HcldRT0gzdC1fQktnT0FXUENjVmFXRXRoYXJkVmJ4WWZAKRFdXU2tGdmUyTEpZAYk96b1BrY1NvQ3BlMQZDZD'

// evicstore.com
// const access_token = 'IGQVJXMmJwUUR5SXdBa3ZAzdU9HNGpQUmJ2MHZAlWl9mUEdXdlhSVmV2LWdCV3dqY0R3ZAzV6aG54NWFtZAlNaOVAxdlF5Qk84MzB3UWRyZAkpsWjN2ODJyRHRsRzJEdjJqX19jTEVVcV9vWGdsV1Q1dGdNbgZDZD'
const access_token = 'IGQVJYN0VaQ0QySFJTaUROdFV0c0hIODhzYnZAwTExOQzZA5cDVIQ1NZAUGFMM0dtWHI4X1VORy11REl4MTlRWU5vU3pkOGI0Yzk5b1dneWJ1ZAm1LTUFOcVNEQ1BGWmxYX2NUOWp2S2lma29hTjlobURxdgZDZD'
// const [posts, setposts] = useState([
// {
//     "id": "17934647698581558",
//     "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/217968118_986593545448960_5406088763550514707_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=0nDo8Cp9Y-AAX8qmZ-4&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=705bf2e532203e4cae3e938cd5741404&oe=618A74BF",
//     "caption": "TRANQUILITY🦚🏔"
// },
// {
//     "id": "17934647698581558",
//     "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/217968118_986593545448960_5406088763550514707_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=0nDo8Cp9Y-AAX8qmZ-4&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=705bf2e532203e4cae3e938cd5741404&oe=618A74BF",
//     "caption": "TRANQUILITY🦚🏔"
// }])
const [posts, setposts] = useState([])

const uname = 'ck_1c9fd82800542cd01838923009ea20743be2734f'
const pass = 'cs_dc4f49dbbd4efa9f2608ad3b14daec05b0b38aa6'


const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')
    useEffect(() => {
    axios.get(`https://evicstore.com/wp-json/wc/v3/products?per_page=50`,{
        headers: {
            'Authorization': `Basic ${token}`
          },
    })
    .then((res)=> {
        console.log(res.data)
        setposts(res.data)
        setloading(false) 
    })
    .catch((res)=> {
        console.error(res)
        seterror(true)

    })
    .finally(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 5 second!')
            setloading(false)
        }, 3000);
        return () => clearTimeout(timer);

    })
    }, [])

    // useEffect(() => {
    //     getAllPosts()
    // }, [])
    const profilepic = "LOL"


    const findPostByKey = (postId) => {
    for (let i = 0; i < spreadsheet.length; i++) { 
        if (spreadsheet[i].igId == postId){
            console.log("Post Found")
            console.log(spreadsheet[i].id)
            writeUserData(spreadsheet[i].id, spreadsheet[i].med , "mr.adumatta@gmail.com" , null)
            window.location.href = spreadsheet[i].wooId; 
            return
        }
        else{
            console.log("Nothing found")
        }
    }
    console.log(postId)
}
let igArray = []

const overwriteDB = () => {
    console.log("We are overidinggg!")
    for (let i = 0; i < posts.length; i++) { 
        // check the snapshop object for item id with wooURL, else cast.
            console.log("Post - " + posts[i].id)
            // console.log("Post test ")
            console.log(posts[i].id)
            // const isWoo = checkForWooUrl(posts[i].id)
            const isWoo = readData(posts[i].id)
            console.log("isWooNot!!!")
            console.log(isWoo)
            // checkForWooUrl(posts[i].id) !== null ? writeUserData(posts[i].id, posts[i].media_url , posts[i].caption, ) : 
            isWoo ? writeUserData(posts[i].id, posts[i].media_url , posts[i].caption, isWoo, posts[i].media_type) : writeUserData(posts[i].id, posts[i].media_url , posts[i].caption, "null", posts[i].media_type)
            // Append this to an array
            isWoo && igArray.push({
                'id': posts[i].id, 
                "media_url":posts[i].media_url , 
                "caption":posts[i].caption,
                "wooUrl":isWoo, 
                "media_type":posts[i].media_type
            })
    }   
    console.log("postId")
    console.log("igArray")
    console.log(igArray)
    getAllPosts()
}

const editPost = (postId) => {
    console.log(postId)
    history.push(`/addPost/${postId}`)

}

setTimeout(() => {
    console.log(igArray)
}, 5000);

const readData = (postBody) => {
console.log("READ DATA FUNCTION");
let wooUrl = null
const postRef = ref(db, 'post/' + postBody );
        onValue(postRef, (snapshot) => {
        const data = snapshot.val();
        console.log("data")
        console.log(data.wooUrl)
        wooUrl = data.wooUrl
    })
    return wooUrl
}

const checkForWooUrl = (postId) => {
    console.log("posts")
    console.log("Checking for Woo Url Function")
    console.log(postId)
    // check if we have that in our db
    const isWooUrl = readData(postId)
    console.log('isWooUrl!')
    console.log(isWooUrl)
    // const postRef = ref(db, 'post/' + postBody );
    //     onValue(postRef, (snapshot) => {
    //     const data = snapshot.val();
    //     console.log("data")
    //     console.log(data)
    //     setselectedPost(data)
    // check if our db has a wooUrl
    // if wooUrl: append it and set the whole thing again, else set it as null.
   
    // for (let i = 0; i < postsFromDatabase.length; i++) { 
    //     if (postsFromDatabase[i].wooUrl){
    //         console.log("Found with the URL!")
    //     }
    // }

}

    const check = (post) => {
        window.location.href = 'https://gsu.qhx.mybluehost.me/?product=38?per_page=200'; 
        // findPost(post.id)
        console.log(post)
        findPostByKey(post.id)
        // getAllPosts()
        // for item in list;
        // pass id to funtion that loops through all the posts from the selected user
        // if found, append wooId   
        console.log("spreadsheet.igId")
        console.log(spreadsheet[0])
        console.log(post.media_url)
    }

    const [spreadsheet, setspreadsheet] = useState([
        {
        igId: '17934647698581558',
        wooId: 'https://gsu.qhx.mybluehost.me/?product=example-of-a-simple-product'
    },
    {
        igId: '17934647698581558',
        wooId: 'https://gsu.qhx.mybluehost.me/?product=example-of-a-simple-product'
    },
])


    const [error, seterror] = useState(false)

    // {posts.map((post)=>(
    //    <h4>{post.media_url}</h4>
    // ))}
    return (
        <>
           <Container >
              {
            loading 
            ? 
            <div className="loadingPage">
            <Spinner style={{margin:'auto'}} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>
            :

            <>
            {
                error && <ErrorScreen/>

            }
            
            <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>


   
                {posts.map((post)=>(
                        post.status == 'publish'
                        &&
                        <Post id={post.id} style={{marginBottom:10, marginRight:10}}  wooUrl={post.permalink} key={post.id} media={post.images[0] ? post.images[0].src : null} media_type={post.media_type} />
                        // <Post id={post.id} xs="4" md='4' style={{marginBottom:10, marginRight:10}} key={post.id} media={post.images[0] ? post.images[0].src : null} media_type={post.media_type} />
                    // <Col onClick={() => editPost(post.id)}  xs="4" md='4' style={{marginBottom:10}}>
                    // </Col>
                ))}
                </div >
                </>
                }

           </Container>
        </>
    )
}

export default WooCommerce
