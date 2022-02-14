import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";

const SearchItem = ({ handleAddProduct, product }) => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("1");

  return (
    <div className="bg-white rounded shadow-sm p-2 search-item">
      <Row className="g-2">
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInputGrid" label="Quantity">
            <Form.Control
              name="quantity"
              type="number"
              placeholder=""
              min={1}
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="p-2">
        <Col className="col-4">
          <div className="addItem__image">
            <img
              src={
                product.images.length > 0
                  ? product.images[0].src
                  : "https://firebasestorage.googleapis.com/v0/b/fir-learning-35a38.appspot.com/o/evic%20LOGOo-03.png?alt=media&token=d9d6616c-b0d7-4510-9841-39c8527b8102"
              }
              alt=""
            />
          </div>
        </Col>
        <Col className="col-4">
          <p className="text-truncate">{product.name}</p>
        </Col>

        <Col className="col-4">
          <Button
            variant="primary"
            onClick={() => {
              handleAddProduct(product, quantity);
            }}
            className="float-right mt-1 add-btn"
          >
            Add Item
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchItem;
