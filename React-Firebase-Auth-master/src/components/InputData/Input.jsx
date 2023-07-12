import React, { useState } from 'react';
import './Input.css';
import logoImage from './ask.png';
import {  useHistory } from "react-router-dom"
import firebase from 'firebase';
const ForumPage = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const history = useHistory()  
    

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitted:', name, id);
    history.push("/")  
  };
  
    const addDocument = async () => {
    
      // const db = firebase.firestore();
      const currentUser = firebase.auth().currentUser;
    
      // Create a new document for the user using their user ID
      firebase
        .firestore()
        .collection('Devlogix')
        .doc(currentUser.uid)
        .set({
           email: currentUser.email,
           name: name,
           id:id
          // Additional user data
        })
        .then(() => {
          console.log('User document created successfully!');
        })
        .catch((error) => {
          console.error('Error creating user document: ', error);
        });
    
      
  }; 
  return (
    <div className="forum-page">
      <div className="forum-page__content">
        <img src={logoImage} alt="Logo" className="forum-page__logo" />
        <h1 className="forum-page__title">Welcome to the Account Setup!</h1>
        <form className="forum-page__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Unique ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit" onClick={addDocument}>Join</button>
        </form>
      </div>
    </div>
  );
};

export default ForumPage;