import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "./ProductItem";

const Order = () => {
  let { id } = useParams();
  console.log(id);

  const [order, setorder] = useState("initialState");

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
      setitems(res.data.line_items);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>
        <b>
          Order #{id} - {order.billing ? order.billing.first_name : null}
        </b>
      </h1>
      {/* <h4><b>{order.fee_lines.length < 1 ? order.fee_lines[0].meta_data[1].value : null}</b></h4> */}

      <div>
        {/* <h1><a href={'tel:' + order.billing.phone}>{order.billing.phone}</a></h1> */}
        <a href={order.billing ? "tel:" + order.billing.phone : null}>
          <h1>{order.billing ? order.billing.phone : null}</h1>
        </a>
        <h6>Testing sub text</h6>
      </div>

      <div class="scrolling-wrapper-flexbox">
        {items &&
          items.map((item) => {
            return <ProductItem token={token} product_id={item.product_id} />;
          })}
      </div>

      <button className="subbutton" style={{ backgroundColor: "green" }}>
        Complete
      </button>
    </div>
  );
};

export default Order;
