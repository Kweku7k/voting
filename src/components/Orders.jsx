import React,{useEffect, useState} from 'react'
import axios from 'axios'
import InputField from '../components/InputField'
import {Form, Row, Spinner, Col, FloatingLabel, Container, Button} from 'react-bootstrap'
const Orders = () => {

    
const uname = 'ck_2e4053609add9cc95d435743c2d518916a3bf47b'
const pass = 'cs_1efd19b1fc8451ac8858b31d3cf26c7ba2e9527d'

const [loading, setloading] = useState(true)

const [phoneNumber, setphoneNumber] = useState("")
const [customerName, setCustomerName] = useState("")

const [items, setitems] = useState()

const productRow = {
  'marginBottom':20
}


const [productid, setproductid] = useState()
const addOrder = () => {
    setloading(true)
    axios.post(`https://gsu.qhx.mybluehost.me/wp-json/wc/v3/orders`,
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
  "line_items": [
    {
      "product_id": productid,
      "quantity": 2
    },
  ],
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
})}

const [products, setproducts] = useState([])
const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')
    useEffect(() => {
    axios.get(`https://gsu.qhx.mybluehost.me/wp-json/wc/v3/products`,{
        headers: {
            'Authorization': `Basic ${token}`
          },
    })
    .then((res)=> {
        console.log(res.data)
        setproducts(res.data)
        setloading(false)  
    })
    }, [])

    return (
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
    <Form.Control value={customerName} onChange= {(e) => setCustomerName(e.target.value)} type="text" placeholder="Enter Customer Name" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control value={phoneNumber} onChange= {(e) => setphoneNumber(e.target.value)} type="number" placeholder="Enter Phone Number" />
  </Form.Group>
  

  {/* {items.map((item) => { */}

  <Row className="g-2 mb-2">
    <Form.Label>Items</Form.Label>

  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Items">
      <Form.Select onChange={(e) => setproductid(e.target.value)} aria-label="Floating label select example">
      {products.map((product)=>(
        <option value={product.id}>{product.name}</option>
))} 
        
      </Form.Select>
    </FloatingLabel>
  </Col>

  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Quantity">
      <Form.Control type="number" placeholder="" />
    </FloatingLabel>
  </Col>
</Row>  
  {/* })÷ */}


  {/* {items.map((item) => { */}

  <Row style={{productRow}} className="g-2 mb-2">

  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Items">
      <Form.Select onChange={(e) => setproductid(e.target.value)} aria-label="Floating label select example">
      {products.map((product)=>(
        <option value={product.id}>{product.name}</option>
))} 
        
      </Form.Select>
    </FloatingLabel>
  </Col>

  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Quantity">
      <Form.Control type="number" placeholder=""  />
    </FloatingLabel>
  </Col>
</Row>  
  {/* })÷ */}


  {/* {items.map((item) => { */}

  <Row style={{productRow}} className="g-2 mb-2">

  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Items">
      <Form.Select onChange={(e) => setproductid(e.target.value)} aria-label="Floating label select example">
      {products.map((product)=>(
        <option value={product.id}>{product.name}</option>
))} 
        
      </Form.Select>
    </FloatingLabel>
  </Col>

  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Quantity">
      <Form.Control type="number" placeholder=""/>
    </FloatingLabel>
  </Col>
</Row>  
  {/* })÷ */}

  {/* {items.map((item) => { */}

  <Row style={{productRow}} className="g-2 mb-2">

  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Items">
      <Form.Select onChange={(e) => setproductid(e.target.value)} aria-label="Floating label select example">
      {products.map((product)=>(
        <option value={product.id}>{product.name}</option>
))} 
        
      </Form.Select>
    </FloatingLabel>
  </Col>

  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Quantity">
      <Form.Control type="number" placeholder=""/>
    </FloatingLabel>
  </Col>
</Row>  
  {/* })÷ */}

  {/* {items.map((item) => { */}

  <Row style={{productRow}} className="g-2 mb-2">

  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Items">
      <Form.Select onChange={(e) => setproductid(e.target.value)} aria-label="Floating label select example">
      {products.map((product)=>(
        <option value={product.id}>{product.name}</option>
))} 
        
      </Form.Select>
    </FloatingLabel>
  </Col>

  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Quantity">
      <Form.Control type="number" placeholder=""/>
    </FloatingLabel>
  </Col>
</Row>  
  {/* })÷ */}


  <Button variant="primary" onClick={() => addOrder()} type="submit">
    Add Item
  </Button>
</Form>
}
             
        </Container>
    )
}



export default Orders
