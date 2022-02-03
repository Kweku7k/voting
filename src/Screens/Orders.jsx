import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Container, Card, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';



const Orders = () => {
var moment = require('moment'); 

let {id} = useParams()
    console.log(id)



const [orders, setorders] = useState([])


const uname = 'ck_1c9fd82800542cd01838923009ea20743be2734f'
const pass = 'cs_dc4f49dbbd4efa9f2608ad3b14daec05b0b38aa6'

const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')


useEffect(() => {
axios.get(`https://evicstore.com/wp-json/wc/v3/orders?per_page=10`,{
    headers: {
        'Authorization': `Basic ${token}`
      },
})
.then((res)=> {
    console.log(res.data)
    setorders(res.data)
    // setloading(false) 
})
.catch((res)=> {
    console.error(res)
    // seterror(true)

})
},[])


 const getImage = (link) => {
    axios.get(`${link}`,{
        headers: {
            'Authorization': `Basic ${token}`
          },
    })
    .then((res) => {
        console.log(res.data)
    })
 }

    return (

        <>
        <Container>
        {/* <Container> */}
        <h4><b>All your orders</b></h4>
        <div>

        <Link style={{display:'block'}} to={`/input`}>
        <button className='button'>Create New Order </button>
        </Link>
        </div>

        {orders.map((order)=>(
        //     <Card>
        //                 <h4>{order.id}</h4>
        // </Card>

        <Row width='100%'>

            <div>
            <br/>
            <Link style={{color:'black', textDecoration:'none'}} to={`/order/${order.id}`}>
                <div className="orderrow">
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h4><b>#Order {order.id}</b></h4>
                    <div style={{width:10, height:10, backgroundColor:'green', borderRadius:'50%'}}></div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h6>&#8373;{order.total}</h6> <span><h6>{moment(order.date_created).format("MMM Do YY  HH:mm")}</h6></span>
                    </div> 
                </div> 
            </Link>
            </div>
        </Row>


                ))}
            
</Container>

        </>
    )
}

export default Orders
