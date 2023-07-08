import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import back from "../Images/background.jpg";
import logo from "../Images/image-removebg-preview.png";
import title from "../Images/l2.png";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
      // Perform any additional logic or actions here if needed
      navigate("/Menu"); // Replace '/Menu' with the path to your desired page
    };
  return (
    <div>
      <Card className="bg-dark text-white" style={{ height: "500px" }}>
        <Card.Img src={back} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ textAlign: "center", color: "black" }}>
            {" "}
            <img style={{ width: "250px" }} src={title} alt="title" />
          </Card.Title>
          <Card.Text>
            <h1> Upto 50% off </h1>
            <img
              className="img-fluid"
              style={{ marginLeft: "50px" }}
              src={logo}
              alt="logo"
            />
            <br />
            <text style={{ color: "black" }}></text>
            <div className="col-lg-5">
              <Card.Text>
                Introducing our extraordinary clothing brand, where style meets
                unparalleled quality. Step into a world of fashion-forward
                designs and immerse yourself in the perfect blend of comfort and
                sophistication. From the moment you put on our garments, you'll
                feel the difference that comes from our meticulous attention to
                detail and the use of premium materials. Whether it's our
                exquisite dresses, tailored suits, or edgy streetwear, our brand
                offers a diverse range of options to cater to every individual's
                unique taste and style.
              </Card.Text>
            </div>
          </Card.Text>

          <Button
            style={{
              marginLeft: "400px",
              marginTop: "100px",
              background: "Red",
              border: "2px solid black",
            }}
            onClick={handleShopNowClick}
          >
            Shop Now
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Home;
