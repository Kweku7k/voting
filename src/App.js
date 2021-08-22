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




function App() {
  return (
    <Router>
      <div>
      <Navbar bg="transparent" expand="lg">
  <Container>
    <Navbar.Brand href="#home">VoteNow</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Elections</Nav.Link>
        <Nav.Link href="#link">Contact Us</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>




        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>

          <Route path="/:el">
          <Categories/>
          </Route>

          <Route exact path="/candidates">
          <Candidates/>
          </Route>

          <Route path="/vote">
          <VoteScreen/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
