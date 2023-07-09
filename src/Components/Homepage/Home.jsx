import React, { Component } from "react";
import "./Home.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../Images/image-removebg-preview.png";
import Slideshow from "./SlideShow";
import Tshirt from "../Tshirt/Tshirt";
import Shoes from "../Shoes/Shoes";
import Jacket from "../Jackets/Jackets";
import Belts from "../Belts/Belts";

class Home extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Slideshow />
        <Tshirt />
        <Shoes />
        <Jacket />
        <Belts />
        <div
          className="body"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <img src={logo} alt="logo"></img>
          <h2>
            Introducing our extraordinary clothing brand, where style meets
            unparalleled quality. Step into a world of fashion-forward designs
            and immerse yourself in the perfect blend of comfort and
            sophistication. From the moment you put on our garments, you'll feel
            the difference that comes from our meticulous attention to detail
            and the use of premium materials. Whether it's our exquisite
            dresses, tailored suits, or edgy streetwear, our brand offers a
            diverse range of options to cater to every individual's unique taste
            and style.
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
