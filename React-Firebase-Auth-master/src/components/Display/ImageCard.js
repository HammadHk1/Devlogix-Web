import React from "react";
import "./ImageCard.css";
import img from "../Profile/b1.jpg";
import firebase from "firebase";
const BlogPage = () => {
  const [array, setArray] = React.useState({});
  const [dataa, setdata] = React.useState("false");
  const fetchPost = async () => {
    const user = firebase.auth().currentUser;
  
    if (user) {
      const userRef = firebase.firestore().collection("Devlogix").doc(user.uid);
      const doc = await userRef.get();
      if (doc.exists) {
        console.log(doc.id, "=>", doc.data()["title"]);
        setdata(doc.data());
        setArray(doc.data()["title"]);
      } else {
        console.log("User document not found!");
      }
    } else {
      console.log("No authenticated user found!");
    }
  };
  return (
   <div className="back">
    <div className="blog-page">
      <div className="blog-container">
        <div className="blog-image">
          <img src={img} alt="Blog Image" />
        </div>
        <div className="blog-content">
          <h2 className="blog-title">Blog Title</h2>
          <p className="blog-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            auctor sapien nec neque condimentum, sit amet vulputate est semper.
            Pellentesque feugiat lectus at consectetur consectetur. Nam nec
            feugiat urna.Bali is predominantly a Hindu country. Bali is known
            for its elaborate, traditional dancing. The dancing is inspired by
            its Hindi beliefs. Most of the dancing portrays tales of good versus
            evil. To watch the dancing is a breathtaking experience. Lombok has
            some impressive points of interest – the majestic Gunung Rinjani is
            an active volcano. It is the second highest peak in Indonesia. Art
            is a Balinese passion. Batik paintings and carved statues make
            popular souvenirs. Artists can be seen whittling and painting on the
            streets, particularly in Ubud. It is easy to appreciate each island
            as an attractive tourist destination. Majestic scenery; rich
            culture; white sands and warm, azure waters draw visitors like
            magnets every year. Snorkelling and diving around the nearby Gili
            Islands is magnificent. Marine fish, starfish, turtles and coral
            reef are present in abundance. Bali and Lombok are part of the
            Indonesian archipelago. Bali has some spectacular temples. The most
            significant is the Mother Temple, Besakih. The inhabitants of Lombok
            are mostly Muslim with a Hindu minority. Lombok remains the most
            understated of the two islands. Lombok has several temples worthy of
            a visit, though they are less prolific. Bali and Lombok are
            neighbouring islands.
          </p>
          {/* <a href="#" className="read-more-btn">Read More</a> */}
        </div>
      </div>
    </div>
    </div> 
  );
};

export default BlogPage;
