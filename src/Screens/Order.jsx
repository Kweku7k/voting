import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "./ProductItem";
import { Container, Row, Col } from "react-bootstrap";

const Order = () => {
  let { id } = useParams();
  console.log(id);

  const [order, setOrder] = useState({});

  const uname = "ck_1c9fd82800542cd01838923009ea20743be2734f";
  const pass = "cs_dc4f49dbbd4efa9f2608ad3b14daec05b0b38aa6";

  const token = Buffer.from(`${uname}:${pass}`, "utf8").toString("base64");

  const [items, setitems] = useState([]);

  // get the order by the Id
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get(
        `https://evicstore.com/wp-json/wc/v3/orders/${id}`,
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      );
      setOrder(res.data);
      setitems(res.data.line_items);
      console.log("order: ", order.fee_lines);
    };

    fetchOrders();
  }, []);

  return (
    <div className="my-4">
      {order.billing && (
        <div className="order-details shadow-sm p-3 m-4 bg-white rounded">
          <h1>{`${order.billing.first_name} ${order.billing.last_name}`}</h1>
          <h1>Order No: {id}</h1>
          <h4>Phone No: {order.billing.phone}</h4>

          <h4>Location:</h4>
        </div>
      )}

      <Container>
        {items &&
          items.map((item) => {
            return (
              <ProductItem
                token={token}
                product_id={item.product_id}
                key={item.id}
              />
            );
          })}
      </Container>

      <button className="subbutton" style={{ backgroundColor: "green" }}>
        Complete
      </button>
    </div>
  );
};

export default Order;
