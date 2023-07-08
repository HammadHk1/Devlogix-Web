import React from "react";
import "./Jackets.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import j1 from "../Items/Jackets/Jacket1.png";
import j2 from "../Items/Jackets/Jacket2.png";
import j3 from "../Items/Jackets/Jacket2.png";
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

function Jacket() {
  return (
    <div style={{ display: "flex", marginLeft: "80px", marginTop: "50px" }}>
        <div style={{marginRight:'20px'}}>
        <h1><span>J</span> 
        <br/> 
        <span>A</span><br/> 
        <span>C</span><br/> 
        <span>K</span><br/> 
        <span>E</span><br/> 
        <span>T</span><br/> 
        <span>S</span><br/> 
        </h1>
        </div>
        
       

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
  );
}
export default Jacket;

{
  /* <div class="container">
<div class="box">
  <div class="title">
    <span class="block"></span>
    <h1>
      J<span></span>
    </h1>
  </div>
  <div class="title">
    <span class="block"></span>
    <h1>
      A<span></span>
    </h1>
  </div>
  <div class="title">
    <span class="block"></span>
    <h1>
      C<span></span>
    </h1>
  </div>
  <div class="title">
    <span class="block"></span>
    <h1>
      K<span></span>
    </h1>
  </div>
  <div class="title">
    <span class="block"></span>
    <h1>
      E<span></span>
    </h1>
  </div>
  <div class="title">
    <span class="block"></span>
    <h1>
      T<span></span>
    </h1>
  </div>
  <div class="title">
    <span class="block"></span>
    <h1>
      S<span></span>
    </h1>
  </div>
</div>
</div> */
}
