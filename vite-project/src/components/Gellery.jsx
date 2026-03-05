import React from 'react';

const Gallery = () => {
  const gallery = [
    { src: 'image15.jpg', name: 'Exercise 1' },
    { src: 'image19.jpg', name: 'Exercise 2' },
    { src: 'image3.jpeg', name: 'Exercise 3' },
    { src: 'image4.jpg', name: 'Exercise 4' },
    { src: 'image11.jpg', name: 'Exercise 5' },
    { src: 'image6.jpg', name: 'Exercise 6' }
  ];

  return (
    <section className='mt-10'>
      <h1 className='flex justify-center text-5xl font-semibold mb-10'>Better Beat Best</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Exactly 3 columns
        gap: '20px', // Space between images
        marginTop: '20px',
        padding: '0 20px',
      }}>
        {
          gallery.map((element, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                width: '100%',
                height: '300px', // Fixed height for all images
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Subtle shadow for a modern effect
              }}
            >
              <img
                src={element.src}
                alt={`Gallery image ${index + 1}`}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures the image covers the container without distortion
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
                  color: 'white',
                  padding: '10px',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                {element.name}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Gallery;