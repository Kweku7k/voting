import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'

const Order = () => {

    let {id} = useParams()
    console.log(id)


const [order, setorder] = useState("initialState")

const uname = 'ck_1c9fd82800542cd01838923009ea20743be2734f'
const pass = 'cs_dc4f49dbbd4efa9f2608ad3b14daec05b0b38aa6'

const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')

const [items, setitems] = useState([])

const products = []

useEffect(() => {
    axios.get(`https://evicstore.com/wp-json/wc/v3/orders/${id}`,{
        headers: {
            'Authorization': `Basic ${token}`
          },
    })
    .then((res)=> {
        console.log(res.data)
        console.log(res.data)
        setorder(res.data)
        setitems(res.data.line_items)
        console.log(res.data.line_items)
    })
    .catch((res)=> {
        console.error(res)
    })
    },[])


    const [imageUrl, setimageUrl] = useState(null)

const getImage = (prodcuctId) => {
    
    console.log("Start Get Image")
    axios.get(`https://evicstore.com/wp-json/wc/v3/products/${prodcuctId}`,{
    headers: {
        'Authorization': `Basic ${token}`
      },

    })
    .then((res)=> {
    console.log(res.data)
    // setimageUrl = res.data.images[0].src
    return res
})

console.log("Didnt exit")
// console.log(imageUrl)
return imageUrl

}


// getImage(365)



    return (
        <div>
            <h1><b>Order #{id} - {order.billing ? order.billing.first_name : null}</b></h1>
            <h4><b>{order.fee_lines ? order.fee_lines[0].meta_data[1].value : null}</b></h4>

            <div>
                {/* <h1><a href={'tel:' + order.billing.phone}>{order.billing.phone}</a></h1> */}
                <a href={order.billing ? 'tel:'+order.billing.phone : null}><h1>{order.billing ? order.billing.phone : null}</h1></a>
                <h6>Testing sub text</h6>
            </div>



            <div class="scrolling-wrapper-flexbox">
                {items.map((item) =>{
                    return(
                <div key={item.id} class="scrolling-card">
                    <img src={getImage(item.product_id)} />
                
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <h4>{item.name}</h4><span><h4>{item.quantity}</h4></span>
                    </div>
                    <h4>{item.product_id}</h4>
                    </div>
                    )

                })} 
            </div>

                <button className='subbutton' style={{backgroundColor:"green"}}>Complete</button>

        </div>
    )
}

export default Order
