import {
  faBox,
  faBoxOpen,
  faLock,
  faTable,
  faTruckLoading,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Dashboard = () => {
 var history = useHistory()
  return (
    <div style={{ width: "100%" }}>
      <h6 className="text-muted" style={{ margin: 20, textAlign: "center" }}>
      INSTAGRAM
      </h6>

<Link style={{ textDecoration: "none", color: "black" }} onClick={()=> window.location.replace("https://www.instagram.com/evic.store/")}>
          <div style={{margin:'auto', textAlign:'center'}} className="main-dash-options-card">
            <h4>Go to your Instagram</h4>
          </div>
        </Link>

        <h6 className="text-muted" style={{ margin: 20, textAlign: "center" }}>
        WOOCOMMERCE
      </h6>


<Link style={{ textDecoration: "none", color: "black" }} onClick={()=> window.location.replace("https://www.evicstore.com/")}>
          <div style={{margin:'auto', textAlign:'center'}} className="main-dash-options-card">
            <h4>Visit your website</h4>
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

        <Link style={{ textDecoration: "none", color: "black" }} to="/private">
          <div className="dash-options-card">
            <div className="ellipse" style={{ backgroundColor: "greenyellow" }}>
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div>
              <h4 style={{ marginBottom: 0 }}>
                <b>Private Products</b>
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
