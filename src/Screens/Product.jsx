import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { Spinner } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'

const Product = () => {

    const [loading, setloading] = useState(true)
    
    const [product, setproduct] = useState("initialState")

    let {id} = useParams()
    console.log(id)

    const history = useHistory()

    const uname = 'ck_1c9fd82800542cd01838923009ea20743be2734f'
    const pass = 'cs_dc4f49dbbd4efa9f2608ad3b14daec05b0b38aa6'
    
    let store = []
    store.push(localStorage.getItem("store"))


    const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')

    const buyItem = () => {
        console.log(id)
        console.log(store)
        store.push(id)
        history.push('/cart', {cart:id})
        localStorage.setItem("store", store)
    }

    useEffect(() => {
        axios.get(`https://evicstore.com/wp-json/wc/v3/products/${id}`,{
            headers: {
                'Authorization': `Basic ${token}`
              },
        })
        .then((res) => {
            console.log(res.data)
            setproduct(res.data)
            setloading(false)
        })
        
    }, [])
   

    return (
        
        
            loading 

            ?
            <div className="loadingPage">
            <Spinner style={{margin:'auto'}} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>

            :

        
        <div style={{width:'100%'}}>
            <div className="productImage">
            <img    className="fillImage" src={ product.images ? product.images[0].src : null}/>
            </div>

            <br/>
            <div style={{padding:20}}>

            <h4><b>{product.name}</b></h4>
            <h6>Ghc{product.price}</h6>
            </div>

            <div className="footbar">
            <button className="buybutton" onClick={()=>buyItem()}>Buy Now</button>
            <div className="shopHolder">
                <FontAwesomeIcon icon={faShoppingBag}/>
            </div>
            </div>

        </div>
        
    )
}

export default Product
