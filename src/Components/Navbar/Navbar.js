import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/l1.png";
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const navigate = useNavigate();
  const handleJacketsNowClick = () => {
    // Perform any additional logic or actions here if needed
    navigate("/Jackets"); // Replace '/Menu' with the path to your desired page
  };
  const handleShoesNowClick = () => {
    // Perform any additional logic or actions here if needed
    navigate("/Shoes"); // Replace '/Menu' with the path to your desired page
  };
  const handleTshirtssNowClick = () => {
    // Perform any additional logic or actions here if needed
    navigate("/Tshirts"); // Replace '/Menu' with the path to your desired page
  };
  const handleBeltsNowClick = () => {
    // Perform any additional logic or actions here if needed
    navigate("/Belts"); // Replace '/Menu' with the path to your desired page
  };
  const handlehomeNowClick = () => {
    navigate("/");
  };
  const handleAllNowClick = () => {
    navigate("/All");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          {" "}
          <img style={{ width: "50px" }} src={logo} alt="logo" /> Maddy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={handlehomeNowClick}>Home</Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
            <NavDropdown title="Stock" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={handleJacketsNowClick}>
                Jackets
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleShoesNowClick}>
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleTshirtssNowClick}>
                Tshirts
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleBeltsNowClick}>
                Belts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleAllNowClick}>
                Show All
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
