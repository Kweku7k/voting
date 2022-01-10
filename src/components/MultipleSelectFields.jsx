import React,{useState} from 'react'
import { Row, Button, Col, Form, FloatingLabel } from 'react-bootstrap';



const MultipleSelectFields = ({itemSizes, inputList, setInputList }) => {

const handleInputChange = (e, index) => {
 const { name, value } = e.target;
 const list = [...inputList];
 list[index][name] = value;
 console.log(list)
 setInputList(list);
};


const handleRemoveClick = index => {
 const list = [...inputList];
 list.splice(index, 1);
 setInputList(list);
};


const handleAddClick = () => {
 setInputList([...inputList, { product_id: "365", quantity: "1" }]);
};


const [products, setproducts] = useState([
    {id:1,name: "test"},{id:2,name: "two"},{id:3,name: "three"}
])

    
    return (
        <div>
    {inputList.map((x, i) => {
    return(
    <>
  <Row className="g-2 mb-2">


  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Items">
      <Form.Select name="product_id" onChange={e => handleInputChange(e, i)} value={x.product_id} aria-label="Floating label select example">
      {itemSizes.map((item)=>(
        <option value={item}>{item}</option>
))} 
        
      </Form.Select>
    </FloatingLabel>
  </Col>

  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Quantity">
      <Form.Control name="quantity" type="number" placeholder="" value={ x.quantity ? x.quantity : 1} onChange={e => handleInputChange(e, i)} />
    </FloatingLabel>
  </Col>
  <button onClick={() => handleRemoveClick(i)}>Delete</button>
</Row> 

{inputList.length - 1 === i && 
  <Button variant="primary" onClick={handleAddClick}  type="submit">
    Add Item
  </Button>
  }

</>

    )

  })}
        </div>
    )
}

export default MultipleSelectFields;
