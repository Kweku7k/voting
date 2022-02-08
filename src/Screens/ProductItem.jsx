import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const ProductItem = ({ product_id, token }) => {
  const [item, setItem] = useState(null);

  // this hook fetches each product item  and it runs once
  useEffect(() => {
    const fetchItem = async () => {
      const product = await axios.get(
        `https://evicstore.com/wp-json/wc/v3/products/${product_id}/`,
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      );
      setItem(product.data);
      console.log("item : ", item);
    };

    fetchItem();
  }, []);

  return (
    item && (
      // <Col>1 of 1</Col>
      <Row style={{ height: "18rem" }}>
        <Col>
          <div key={item.id}>
            <img
              src={item.images[0].src}
              alt="product"
              className="d-block"
              style={{ height: "18rem", width: "18rem" }}
            />
          </div>
        </Col>
        <Col>
          <div>
            <h4>{item.name}</h4>
            <span>
              <h4>{item.quantity}</h4>
            </span>
            <h4>{product_id}</h4>
          </div>
        </Col>
        {/* <Col>
          <Card style={{ height: "18rem" }}>
            <Card.Img
              variant="top"
              src={item.images[0].src}
              style={{ height: "100%", width: "18rem" }}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.quantity}</Card.Text>
              <Card.Text>{product_id}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "18rem" }}>
            <Card.Img
              variant="top"
              src={item.images[0].src}
              style={{ height: "100%", width: "18rem" }}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.quantity}</Card.Text>
              <Card.Text>{product_id}</Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    )
  );
};

export default ProductItem;
