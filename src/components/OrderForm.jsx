import React, { useEffect, useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";
import {
  Form,
  Row,
  Spinner,
  Col,
  FloatingLabel,
  Container,
  Button,
  Modal,
} from "react-bootstrap";
import SuccessAlert from "./SuccessAlert";
import { useHistory } from "react-router";

const OrderForm = () => {
  const uname = "ck_1c9fd82800542cd01838923009ea20743be2734f";
  const pass = "cs_dc4f49dbbd4efa9f2608ad3b14daec05b0b38aa6";

  const [loading, setloading] = useState(true);

  const [phoneNumber, setphoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalSpinner, setModalSpinner] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [quantity, setQuantity] = useState("1");
  const [addedProducts, setAddedProducts] = useState([]);
  const [showSearchItems, setShowSearchItems] = useState(false);

  const productRow = {
    marginBottom: 20,
  };

  const history = useHistory();

  // filters the products when the user types a product name
  const handleSearchProducts = (text) => {
    if (text === "") {
      setFilteredProducts(products.slice(0, 11));
    } else {
      const filterArr = products.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ? true : false
      );
      setFilteredProducts(filterArr);
    }
  };

  // adds a product to the items section
  const handleAddProduct = (product, quantity) => {
    setAddedProducts((prev) => [
      ...prev,
      { product: product, quantity: quantity },
    ]);
  };

  const addOrder = (e) => {
    e.preventDefault();
    setShowModal(true);
    setModalSpinner(true);
    const items = addedProducts.map(({ product, quantity }) => {
      return { product_id: product.id, quantity: quantity };
    });

    axios
      .post(
        `https://evicstore.com/wp-json/wc/v3/orders`,
        {
          payment_method: "bacs",
          payment_method_title: "Direct Bank Transfer",
          set_paid: true,
          billing: {
            first_name: customerName,
            last_name: "",
            address_1: "In-Store",
            address_2: "",
            city: "Accra",
            state: "GH",
            postcode: "404",
            country: "GH",
            email: "evic.store19@gmail.com",
            phone: phoneNumber,
          },
          shipping: {
            first_name: "In-Store",
            last_name: "",
            address_1: "In-Store",
            address_2: "",
            city: "Accra",
            state: "GH",
            postcode: "404",
            country: "GH",
          },
          line_items: items,
          shipping_lines: [
            {
              method_id: "flat_rate",
              method_title: "Flat Rate",
              total: "10.00",
            },
          ],
        },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      )
      .then((res) => {
        setModalSpinner(false);
        history.push("/orders");
      });
  };

  const [erroralert, seterroralert] = useState(false);

  const [products, setproducts] = useState([]);

  const token = Buffer.from(`${uname}:${pass}`, "utf8").toString("base64");
  useEffect(() => {
    axios
      .get(`https://evicstore.com/wp-json/wc/v3/products`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        setproducts(res.data);
        setFilteredProducts(res.data.slice(0, 11)); // shows the first 10 products
        setloading(false);
      })
      .catch((err) => {
        console.error(err);
        seterroralert(true);
      });
  }, []);

  const [inputList, setInputList] = useState([
    { product_id: "365", quantity: 1 },
  ]);

  return (
    <>
      <SuccessAlert
        show={erroralert}
        message="Your item was uploaded successfully"
      />
      <Container>
        {loading ? (
          <div className="loadingPage">
            <Spinner
              style={{ margin: "auto" }}
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Form>
            <br />
            <h4>
              <b>Create a new order</b>
            </h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                type="text"
                placeholder="Enter Customer Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
                type="number"
                placeholder="Enter Phone Number"
              />
            </Form.Group>

            <Form.Label>Items</Form.Label>
            {/* Displays the products the user adds after searching */}
            {addedProducts.map(({ product, quantity }, index) => {
              return (
                <Row className="p-2" key={index}>
                  <Col className="col-4">
                    <div className="addItem__image">
                      <img
                        src={
                          product.images.length > 0
                            ? product.images[0].src
                            : "https://firebasestorage.googleapis.com/v0/b/fir-learning-35a38.appspot.com/o/evic%20LOGOo-03.png?alt=media&token=d9d6616c-b0d7-4510-9841-39c8527b8102"
                        }
                        alt={product.name}
                      />
                    </div>
                  </Col>
                  <Col className="col-4">
                    <p>{product.name}</p>
                  </Col>

                  <Col className="col-4">
                    <p>quantity: {quantity}</p>
                  </Col>
                </Row>
              );
            })}

            <Row className="g-2 mb-2">
              <Col md>
                <Form.Control
                  required
                  value={selectedProduct}
                  onChange={(e) => {
                    setSelectedProduct(e.target.value);
                    handleSearchProducts(e.target.value);
                  }}
                  type="text"
                  placeholder="search for a product"
                />
              </Col>

              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Quantity">
                  <Form.Control
                    name="quantity"
                    type="number"
                    placeholder=""
                    min={1}
                    value={quantity}
                    onBlur={() => setShowSearchItems(false)}
                    onFocus={() => setShowSearchItems(true)}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            {/**displays the search results */}
            {showSearchItems &&
              filteredProducts.map((product) => {
                return (
                  <Row className="p-2" key={product.id}>
                    <Col md>
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
                    <Col md>
                      <p>{product.name}</p>
                    </Col>

                    <Col md>
                      <Button
                        variant="primary"
                        // onClick={handleAddClick}
                        onClick={() => {
                          handleAddProduct(product, quantity);
                        }}
                        className="float-right mt-1"
                      >
                        Add Item
                      </Button>
                    </Col>
                  </Row>
                );
              })}

            <Button
              className="subbutton my-4"
              variant="primary"
              onClick={phoneNumber ? (e) => addOrder(e) : null}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
      </Container>
      {/**Modal to show when the user is submitting the form */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
      >
        <Modal.Body className="d-flex flex-column">
          <h4 className="text-center my-3">processing order</h4>
          {modalSpinner ? (
            <Spinner
              style={{ margin: "auto" }}
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <p className="text-center">Order submitted succesfully</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!setModalSpinner && (
            <Button onClick={() => setShowModal(false)}>Close</Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderForm;
