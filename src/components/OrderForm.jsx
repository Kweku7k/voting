import React,{useEffect, useState} from 'react'
import axios from 'axios'
import InputField from '../components/InputField'
import {Form, Row, Spinner, Col, FloatingLabel, Container, Button} from 'react-bootstrap'
import SuccessAlert from './SuccessAlert'
import { useHistory } from 'react-router'
const OrderForm = () => {

    
const uname = 'ck_1c9fd82800542cd01838923009ea20743be2734f'
const pass = 'cs_dc4f49dbbd4efa9f2608ad3b14daec05b0b38aa6'

const [loading, setloading] = useState(true)

const [phoneNumber, setphoneNumber] = useState("")
const [customerName, setCustomerName] = useState("")

const [items, setitems] = useState()

const productRow = {
  'marginBottom':20
}

const history = useHistory()

 // handle input change
 const handleInputChange = (e, index) => {
  const { name, value } = e.target;
  const list = [...inputList];
  list[index][name] = value;
  setInputList(list);
};

// handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...inputList];
  list.splice(index, 1);
  setInputList(list);
};

// handle click event of the Add button
const handleAddClick = () => {
  setInputList([...inputList, { product_id: "365", quantity: "1" }]);
};

const [productid, setproductid] = useState()
const addOrder = () => {
    setloading(true)
    axios.post(`https://evicstore.com/wp-json/wc/v3/orders`,
{
  "payment_method": "bacs",
  "payment_method_title": "Direct Bank Transfer",
  "set_paid": true,
  "billing": {
    "first_name": customerName,
    "last_name": "",
    "address_1": "In-Store",
    "address_2": "",
    "city": "Accra",
    "state": "GH",
    "postcode": "404",
    "country": "GH",
    "email": "evic.store19@gmail.com",
    "phone": phoneNumber
  },
  "shipping": {
    "first_name": "In-Store",
    "last_name": "",
    "address_1": "In-Store",
    "address_2": "",
    "city": "Accra",
    "state": "GH",
    "postcode": "404",
    "country": "GH"
  },
  "line_items": 
  inputList,
  // "line_items": [
  //   {
  //     "product_id": p1,
  //     "quantity": p1val
  //   },
  //   {
  //     "product_id": p2,
  //     "quantity": p2val
  //   },
  // ],
  "shipping_lines": [
    {
      "method_id": "flat_rate",
      "method_title": "Flat Rate",
      "total": "10.00"
    }
  ]
}
,{
        headers: {
            'Authorization': `Basic ${token}`
          },
    })
    .then((res)=> {
        console.log(res.data)
        setloading(false)
        history.push('/orders')
})}

const [erroralert, seterroralert] = useState(false)


const [products, setproducts] = useState([])
const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')
    useEffect(() => {
    axios.get(`https://evicstore.com/wp-json/wc/v3/products`,{
        headers: {
            'Authorization': `Basic ${token}`
          },
    })
    .then((res)=> {
        console.log(res.data)
        setproducts(res.data)
        setloading(false)  
    })
    .catch((err)=>{
      console.error(err)
      seterroralert(true)

    })
    }, [])

    const [inputList, setInputList] = useState([{ product_id: "365", quantity: 1 }]);

    return (
      <>
      {/* <SuccessAlert show={erroralert} message="Your item was uploaded successfully" /> */}
        <Container>


{
loading ? 

<div className="loadingPage">
<Spinner style={{margin:'auto'}} animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>
</div>
:


<Form>
<br/>   
<h4><b>Create a new order</b></h4>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Customer Name</Form.Label>
    <Form.Control required value={customerName} onChange= {(e) => setCustomerName(e.target.value)} type="text" placeholder="Enter Customer Name" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control required value={phoneNumber} onChange= {(e) => setphoneNumber(e.target.value)} type="number" placeholder="Enter Phone Number" />
  </Form.Group>
  

  <Form.Label>Items</Form.Label>


  {inputList.map((x, i) => {
    return(
      <>
  <Row className="g-2 mb-2">

  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Items">
      <Form.Select name="product_id" onChange={e => handleInputChange(e, i)} value={x.product_id} aria-label="Floating label select example">
      {products.map((product)=>(
        <option value={product.id}>{product.name}</option>
))} 
        
      </Form.Select>
    </FloatingLabel>
  </Col>

  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Quantity">
      <Form.Control name="quantity" type="number" placeholder="" value={ x.quantity ? x.quantity : 1} onChange={e => handleInputChange(e, i)} />
    </FloatingLabel>
  </Col>
</Row> 

{inputList.length - 1 === i && 
  <Button variant="primary" onClick={handleAddClick}  type="submit">
    Add Item
  </Button>
  }

</>

    )

  })}


  {/* onClick={() => addOrder()} */}
  {/* onClick={()=>addOrder()}  */}

 <Button className="subbutton" variant="primary" onClick={ phoneNumber ? ()=>addOrder() : null} type="submit" type="submit">
    Submit
  </Button> 
  
</Form>
}
{/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
        </Container>
        </>
    )
}



export default OrderForm
