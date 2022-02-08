import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

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
        <Col sm={5}>
          <div key={item.id} className="product-image__container">
            <img src={item.images[0].src} alt="product" className="d-block" />
          </div>
        </Col>
        <Col>
          <div className="product-image__details">
            <h4>{item.name}</h4>
            <h4>{`GHS: ${parseFloat(item.price).toFixed(2)}`}</h4>
          </div>
        </Col>
      </Row>
    )
  );
};

export default ProductItem;
