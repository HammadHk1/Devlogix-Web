import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jackets from '../Menu/Jacket.jpeg';
import pair from '../Menu/shoes.jpg';
import belt from '../Menu/belt.jpg';
import shirts from '../Menu/shirt.jpg';
import './Cards.css';

const cardData = [
  {
    title: 'Jackets',
    image: Jackets,
    description: "Stay warm in style with our trendy jackets - perfect for any occasion!",
    path: "/jackets"
  },
  {
    title: 'Shoes',
    image: pair,
    description: "Step into style and comfort with our exquisite collection of shoes.",
    path: "/shoes"
  },
  {
    title: 'Belts',
    image: belt,
    description: "Elevate your style with our premium belts - the perfect accessory for any outfit.",
    path: "/belts"
  },
  {
    title: 'Tshirts',
    image: shirts,
    description: "Elevate your style with our trendy and comfortable t-shirts.",
    path: "/tshirts"
  }
];

function Cards() {
  return (
    <div className='hover' style={{ display: 'flex', marginLeft: '80px' }}>
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '18rem', marginRight: '50px' }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            <Link to={card.path}>
              <Button variant="primary">Shop now</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
