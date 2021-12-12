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

    const uname = 'ck_2e4053609add9cc95d435743c2d518916a3bf47b'
    const pass = 'cs_1efd19b1fc8451ac8858b31d3cf26c7ba2e9527d'
    
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
        axios.get(`https://gsu.qhx.mybluehost.me/wp-json/wc/v3/products/${id}`,{
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

        
        <div>
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
