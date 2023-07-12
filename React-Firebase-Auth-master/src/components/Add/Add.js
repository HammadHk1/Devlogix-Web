import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import './Add.css'
import { useHistory } from 'react-router-dom';


const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [paragraph, setParagraph] = useState('');
  const history = useHistory()  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/")  
  };
const addDocument = async () => {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;
  
    const documentRef = db.collection('Devlogix').doc(currentUser.uid);
    
  
    try {
      const documentSnapshot = await documentRef.get();
  
      if (documentSnapshot.exists) {
        // Document exists, check if the 'title' field already exists
        if (documentSnapshot.data().title) {
          // 'title' field exists, add the new title and paragraph as a new object in the existing array
          const existingTitle = documentSnapshot.data().title;
          const newTitle = { title, paragraph , image };
  
          await documentRef.update({
            title: [...existingTitle, newTitle],
          });
  
          console.log('Title added successfully!');
        } else {
          // 'title' field does not exist, create a new array with the new title and paragraph as the first object
          const newTitle = { title, paragraph, image };
  
          await documentRef.update({
            title: [newTitle],
          });
  
          console.log('Title added successfully!');
        }
      } else {
        // Document does not exist, create a new document with the new title and paragraph as the first object
        const newTitle = { title, paragraph,image };
  
        await documentRef.set({
          title: [newTitle],
        });
  
        console.log('Document created successfully!');
      }
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
     
  
  return (
    <div className="blog-form-container">
      <h1>Add a Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Paragraph:</label>
          <textarea value={paragraph} onChange={(e) => setParagraph(e.target.value)} />
        </div>
        <button type="submit" onClick={addDocument}>Add Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
