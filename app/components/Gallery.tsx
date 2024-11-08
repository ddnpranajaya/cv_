import React from 'react';
import Image from 'next/image';
import gaming from '../assets/game.jpg';
import eating from '../assets/eat.jpg';
import reading from '../assets/read.jpg';
import walking from '../assets/walking.jpg';
import './hobbies.css';

const MyGallery = () => {
  const Hobbies = [
    { name: "Gaming", image: gaming },
    { name: "Eating", image: eating },
    { name: "Reading", image: reading },
    { name: "Walking", image: walking },
  ];

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image
              src={hobby.image}
              alt={hobby.name}
              className="gallery-image"
              layout="responsive"
              width={200}
              height={150}
            />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;
