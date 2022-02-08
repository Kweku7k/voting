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
      <Row className="p-4">
        <Col>
          <div key={item.id} style={{ height: "15rem", width: "15rem" }}>
            <img
              src={item.images[0].src}
              alt="product"
              className="d-block"
              style={{ height: "100%", width: "100%" }}
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
      </Row>
    )
  );
};

export default ProductItem;
