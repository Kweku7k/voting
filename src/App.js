// import { AppLayout } from './Screens/LandingPage';
import './App.css';
import { Container, Navbar,Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './Screens/LandingPage';
import Categories from './Screens/Categories';
import Candidates from './Screens/Candidates';
import VoteScreen from './Screens/VoteScreen';
import Instagram from './Screens/Instagram';
import People from './Screens/People';
import { AddPost } from './Screens/AddPost';
import Login from './Screens/Login';
import Admin from './Screens/Admin';
import WooCommerce from './Screens/WooCommerce';
import WooAdmin from './Screens/WooAdmin';
import Product from './Screens/Product';
import Startheader from './components/Startheader';
import Cartheader from './components/Cartheader';
import { useLocation } from 'react-router-dom';
import Cart from './Screens/Cart';
import Form from './Screens/Form';
import InputField from './components/InputField';
import OrderForm from './components/OrderForm';
import Orders from './Screens/Orders';
import Order from './Screens/Order';
import NewOrder from './Screens/NewOrder';
import NewProduct from './Screens/NewProduct';

function App(props) {
  const location = props.location;
  console.log(location)
  return (
    <Router>
      <div style={{width:'100%', height:'100%'}}>
{/* {
      location === 'woo' ? <Startheader/> : <Cartheader/>
} */}

<Startheader/>
       {/* <Startheader/> */}
       {/* <Cartheader/> */}
    {/* <Navbar.Brand href="#home">Evic Store</Navbar.Brand> */}
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    {/* <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Elections</Nav.Link>
        <Nav.Link href="#link">Contact Us</Nav.Link>

      </Nav>
    </Navbar.Collapse> */}

{/* </Navbar> */}




        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}


        <Switch>
          <Route exact path="/">
            <WooCommerce/>
          </Route>

          <Route path="/input">
            <OrderForm/>
          </Route>

          <Route path="/orders">
            <Orders/>
          </Route>

          <Route path="/new">
            {/* <NewOrder/> */}
            <NewProduct/>
          </Route>

          <Route exact path="/order/:id">
            <Order/>
          </Route>

          <Route exact path="/wooAdmin">
            <WooAdmin/>
          </Route>

          <Route exact path="/vote">
        <VoteScreen/>
          </Route>

          <Route exact path="/cart">
        <Cart/>
          </Route>
          
          <Route exact path="/woo">
        <WooCommerce/>
          </Route>

          <Route exact path="/people">
        <People/>
          </Route>

          <Route exact path="/admin">
            <Instagram/>
          </Route>

          <Route exact path="/evic/:id">
            <Product/>
          </Route>



          <Route path="/addPost/:postBody">
            <AddPost/>
          </Route>


          {/* <Route exact path="/:el/vote">
          <People/>
          </Route> */}

          <Route exact path="/candidates">
          <Candidates/>
          </Route>

          <Route path="/post/:el">
          <Candidates/>
          </Route>

          <Route exact path="/form">
          <Form/>
          </Route>

         

        </Switch>
</div>
    </Router>
  );
}

export default App;
