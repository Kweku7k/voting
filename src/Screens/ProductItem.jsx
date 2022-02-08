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
    };

    fetchItem();
  }, []);

  return (
    item && (
      <Row className="p-2 p-sm-4">
        <Col className="col-4">
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
