import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductItem = ({ product_id, token }) => {
  const [item, setItem] = useState(null);

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
      // console.log(product.data.images[0].src);
      setItem(product.data);
      console.log("products :", product.data);
      console.log("product item : ", item);
      console.log("image: ", product.data.images[0].src);
    };

    fetchItem();
  }, []);

  return (
    item && (
      <div key={item.id} class="scrolling-card">
        <img src={item.images[0].src} alt="product" />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>{item.name}</h4>
          <span>
            <h4>{item.quantity}</h4>
          </span>
        </div>
        <h4>{item.product_id}</h4>
      </div>
    )
  );
};

export default ProductItem;
