import React from "react";
import Tshirt from "../Tshirt/Tshirt";
import Shoes from "../Shoes/Shoes";
import Jacket from "../Jackets/Jackets";
import Belts from "../Belts/Belts";
import logo from "../Images/image-removebg-preview.png";
export default function All() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {/* <img style={{ width: "250px" }} src={logo} alt="title" /> */}
        <Tshirt />
        <Shoes />
        <Jacket />
        <Belts />
      </div>
    </div>
  );
}
