import {
  faBox,
  faBoxOpen,
  faTable,
  faTruckLoading,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ width: "100%" }}>
      <h6 className="text-muted" style={{ margin: 20, textAlign: "center" }}>
        DASHBOARD
      </h6>

      {/* <div className="options-header">
        <div className="options-info">
          <div className="iconContainer">
            <FontAwesomeIcon icon={faBox} />
          </div>
          <h1>32</h1>
          <h6 className="text-muted">PRODUCTS</h6>
        </div>
        <div className="options-info">
          <div className="iconContainer">
            <FontAwesomeIcon icon={faBox} />
          </div>
          <h1>32</h1>
          <h6 className="text-muted">PRODUCTS</h6>
        </div>
        <div className="options-info">
          <div className="iconContainer">
            <FontAwesomeIcon icon={faBox} />
          </div>
          <h1>32</h1>
          <h6 className="text-muted">PRODUCTS</h6>
        </div>
      </div> */}

<Link style={{ textDecoration: "none", color: "black" }} to="/orders">
          <div className="dash-options-card">
            <div className="ellipse" style={{ backgroundColor: "greenyellow" }}>
              <FontAwesomeIcon icon={faBoxOpen} />
            </div>
            <div>
              <h4 style={{ marginBottom: 0 }}>
                <b>Orders</b>
              </h4>
            </div>
          </div>
        </Link>

      <h6 className="text-muted" style={{ margin: 20, textAlign: "center" }}>
        ACTIONS
      </h6>

      <div className="options">
        <Link style={{ textDecoration: "none", color: "black" }} to="/orders">
          <div className="dash-options-card">
            <div className="ellipse" style={{ backgroundColor: "greenyellow" }}>
              <FontAwesomeIcon icon={faBoxOpen} />
            </div>
            <div>
              <h4 style={{ marginBottom: 0 }}>
                <b>Orders</b>
              </h4>
              {/* <h6 style={{ opacity: 0.5, color: "green" }}>
                {" "}
                12 <span style={{ color: "green" }}>pending orders</span>
              </h6> */}
            </div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none", color: "black" }} to="/products">
          <div className="dash-options-card">
            <div className="ellipse" style={{ backgroundColor: "greenyellow" }}>
              <FontAwesomeIcon icon={faTruckLoading} />
            </div>
            <div>
              <h4 style={{ marginBottom: 0 }}>
                <b>Products</b>
              </h4>
              {/* <h6 style={{ opacity: 0.5, color: "red" }}>
                {" "}
                12 <span style={{ color: "red" }}>pending orders</span>
              </h6> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
