import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/l1.png";
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const navigate = useNavigate();
  const productData = [
    { id: 1, name: "Jacket", category: "/Jackets" },
    { id: 2, name: "Shoes", category: "/Shoes" },
    { id: 3, name: "Tshirt", category: "/Tshirts" },
    { id: 4, name: "Belt", category: "/Belts" },
  ];
  const handleJacketsNowClick = () => {
    
    navigate("/Jackets"); 
  };
  const handleShoesNowClick = () => {
    
    navigate("/Shoes"); 
  };
  const handleTshirtssNowClick = () => {
    
    navigate("/Tshirts"); 
  };
  const handleBeltsNowClick = () => {
    navigate("/Belts"); 
  };
  const handlehomeNowClick = () => {
    navigate("/");
  };
  const handleAllNowClick = () => {
    navigate("/All");
  };
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    navigate(e.target.value)
  };

  const handleSearch = () => {
    // Filter the products based on the search query and selected category
    const filteredProducts = productData.filter((product) => {
      const isCategoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;
      const isNameMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

      return isCategoryMatch && isNameMatch;
    });

    // Perform additional logic or actions with the filtered products if needed
    console.log(filteredProducts);
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
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />

            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
