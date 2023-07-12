import React, { useState } from "react";
import "./Profile.css"; // Assuming you have a CSS file named 'ProfilePage.css' for styling
import profileImage from "./OIP.jpg";
import b1 from "./add.png";
import logoutimage from "./logout.png";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  // Parameters to get array and whole Package from Firebase/Firestore

  const [array, setArray] = React.useState({});
  const [dataa, setdata] = React.useState("false");

  const handleCardClick = (index) => {
    setExpandedCard(index === expandedCard ? null : index);
  };
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

  React.useEffect(() => {
    fetchPost();
  }, []);

  // useHistory to Link each page to another..

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  const handleadd = () => {
    history.push("/Add");
  };

  // Delete function to delete the blog of that person..
  const deleteArrayItemAtIndex = async (indexToDelete) => {
    const collectionName = "Devlogix";
    const currentUser = firebase.auth().currentUser;
    const documentId = currentUser.uid;
    const arrayFieldName = "title";

    const docRef = firebase
      .firestore()
      .collection(collectionName)
      .doc(documentId);
    const doc = await docRef.get();

    if (doc.exists) {
      const data = doc.data();
      const newArray = [...data[arrayFieldName]];
      newArray.splice(indexToDelete, 1);

      docRef
        .update({
          [arrayFieldName]: newArray,
        })
        .then(() => {
          console.log("Array item deleted successfully!");
          alert("Array item deleted successfully!");
        })
        .catch((error) => {
          console.error("Error deleting array item: ", error);
        });
    } else {
      console.log("Document not found!");
    }
  };

  const handleDeleteItem = (index) => {
    alert("delete");
    deleteArrayItemAtIndex(index);
  };

  const Card = ({ title, content, image, index }) => {
    const isExpanded = expandedCard === index;

    return (
      <div
        className={`card ${isExpanded ? "expanded" : ""}`}
        onClick={() => handleCardClick(index)}
      >
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          {isExpanded && <p className="card-paragraph">{content}</p>}
        </div>
        {isExpanded && (
          <button onClick={() => handleDeleteItem(index)}>remove</button>
        )}

        {!isExpanded && (
          <button className="card-expand" onClick={handleCardClick}>
            Expand
          </button>
        )}
      </div>
    );
  };
  return (
    <div className="profile-page">
      <div className="profile-page__header">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-page__profile-image"
        />
        <h1 className="profile-page__name">{dataa.name}</h1>
        <h2 className="profile-page__nickname">{dataa.id}</h2>
        <button
          style={{ borderRadius: "100px", width: "90px" }}
          onClick={handleSubmit}
        >
          {" "}
          <img
            style={{ height: "40px", width: "40px" }}
            src={logoutimage}
            alt="logout"
          />{" "}
        </button>
      </div>
      <div className="profile-page__cards">
        <button className="addcard" onClick={handleadd}>
          <img
            style={{ height: "80px", width: "80px" }}
            src={b1}
            alt="profile"
          />
          Add
        </button>
        {array &&
          Object.values(array).map((item, index) => (
            <div key={item} className="blog">
              <Card
                title={item.title}
                content={item.paragraph}
                image={item.image}
                index={index}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfilePage;
