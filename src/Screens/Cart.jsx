import axios from 'axios'
import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router'
import Counter from '../components/Counter'
import QuantityCounter from '../components/QuantityCounter'


const Cart = (props) => {


    const [count, setcount] = useState(0)



    const increase = () => {
    console.log(count)
    setcount(count + 1)   
    }

    const decrease = () => {
    console.log(count)
    setcount(count -1)   
    }

    const location = useLocation()
    console.log(location.state.cart)
    const cartInformation = location.state.cart

    const [loading, setloading] = useState(false)

    const checkout = () => {
    setloading(true)
    const token = Buffer.from(`ck_2e4053609add9cc95d435743c2d518916a3bf47b:cs_1efd19b1fc8451ac8858b31d3cf26c7ba2e9527d`, 'utf8').toString('base64')
    axios.post(`https://gsu.qhx.mybluehost.me/wp-json/wc/v3/orders`,
    {
        "payment_method": "bacs",
  "payment_method_title": "Direct Bank Transfer",
  "set_paid": true,
  "billing": {
    "first_name": "Nana Kweku",
    "last_name": "Adumatta",
    "address_1": "50 3rd Road Ablekuma",
    "address_2": "",
    "city": "Accra",
    "state": "GH",
    "postcode": "404",
    "country": "GH",
    "email": "iguser@ig.com",
    "phone": "0545977791"
  },
  "shipping": {
    "first_name": "Nana Kweku",
    "last_name": "Adumatta",
    "address_1": "969 Market",
    "address_2": "",
    "city": "Accra",
    "state": "GH",
    "postcode": "404",
    "country": "GH"
  },
  "line_items": [
    {
      "product_id": 93,
      "quantity": 2
    },
    {
      "product_id": 22,
      "variation_id": 23,
      "quantity": 1
    }
  ],
  "shipping_lines": [
    {
      "method_id": "flat_rate",
      "method_title": "Flat Rate",
      "total": "10.00"
    }
  ]
},
{
    headers: {
        'Authorization': `Basic ${token}`
        },
},
    )
    .then((res) => {
        console.log(res.data)
        // setproduct(res.data)
    })
}
        


    const history = useHistory()
    // console.log(localStorage.getItem(storeArray))
    return (
        <>
            <Container>
                <div className="cartItem">
                <br/>
                    <img style={{width:50, height:50, marginRight:10, objectFit:'cover', borderRadius:10}} src="https://i0.wp.com/gsu.qhx.mybluehost.me/wp-content/uploads/2021/11/Black-and-White-Pussy-Bow-Blouse.jpg?fit=1512%2C2016&ssl=1"/>
                    <div>
                        <h4><b>Product Item Name</b></h4>
                        <h6>Ghc 20.00</h6>
                    </div> 
                    <div>
                        <QuantityCounter increase={() => increase()} decrease={() => decrease()}  count={count} />
                    </div>  
                </div>
            </Container>
            {/*  */}
                <div className="stickBottom">
                    <button style={{width:'100%'}} onClick={() => checkout() } className="button">Checkout</button>
                </div>
        </>
    )
}

export default Cart
