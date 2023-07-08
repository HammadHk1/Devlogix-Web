import Card from "react-bootstrap/Card";
import React from "react";
import back from "../Images/Menuback.jpg";
import logo from "../Images/image-removebg-preview.png";
import Cards from "./Cards";
export default function Menu() {
  return (
    <div>
      <Card className="bg-dark text-white" style={{ height: "500px" }}>
        <Card.Img src={back} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ textAlign: "center", color: "black" }}>
            {" "}
            <img style={{ width: "250px" }} src={logo} alt="title" />
          </Card.Title>
            <Cards></Cards>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
