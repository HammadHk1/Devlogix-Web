import React from "react";
import "./Shoes.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import j1 from "../Items/Shoes/shoes1.jpeg";
import j2 from "../Items/Shoes/shoes2.jpeg";
import j3 from "../Items/Shoes/shoes3.jpeg";
// import jacketData from '../jacket.json';
const JData = [
  {
    id: 1,
    name: "1",
    price: 10,
    image: j1,
  },
  {
    id: 2,
    name: "2",
    price: 20,
    image: j2,
  },
  {
    id: 3,
    name: "3",
    price: 30,
    image: j3,
  },
];

function Shoes() {
  return (
    <div style={{ display: "flex", marginLeft: "80px", marginTop: "50px" }}>
      <div style={{ marginRight: "20px" }}>
        <h1>
          <span>S</span>
          <br />
          <span>H</span>
          <br />
          <span>O</span>
          <br />
          <span>E</span>
          <br />
          <span>S</span>
          <br />
        </h1>
      </div>
    <div className="hover" style={{display: "flex" , marginLeft:'50px'}}>
    {JData.map((card, index) => (
        <Card key={index} style={{ width: "18rem", marginRight: "50px" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>Article : {card.name}</Card.Title>
            <Card.Text> Price : $ {card.price}</Card.Text>
            {/* <Link to={card.path}> */}
            <Button variant="primary">Add to Cart</Button>
            {/* </Link> */}
          </Card.Body>
        </Card>
      ))}
    </div>
      
    </div>
  );
}
export default Shoes;
