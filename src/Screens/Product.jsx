import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router'

const Product = () => {

    const [product, setproduct] = useState("initialState")

    let {id} = useParams()
    console.log(id)

    const uname = 'ck_2e4053609add9cc95d435743c2d518916a3bf47b'
    const pass = 'cs_1efd19b1fc8451ac8858b31d3cf26c7ba2e9527d'
        

    const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')

    useEffect(() => {
        axios.get(`https://gsu.qhx.mybluehost.me/wp-json/wc/v3/products/${id}`,{
            headers: {
                'Authorization': `Basic ${token}`
              },
        })
        .then((res) => {
            console.log(res.data)
            setproduct(res.data)
        })
        
    }, [product])
   

    return (
        <div>
            <div className="productImage">
            <img className="fillImage" src={ product.images ? product.images[0].src : null}/>
            </div>

            <br/>
            <div style={{padding:20}}>

            <h4><b>{product.name}</b></h4>
            <h6>Ghc{product.price}</h6>
            </div>

            <div className="footbar">
            <button className="buybutton">Buy Now</button>
            <div className="shopHolder">
                <FontAwesomeIcon icon={faShoppingBag}/>
            </div>
            </div>

        </div>
    )
}

export default Product
