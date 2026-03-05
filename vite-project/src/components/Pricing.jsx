import React from 'react';

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "image1.jpg",
      title: "Quantities",
      price: 1000,
      length: 3
    },
    {
      imgUrl: "image2.jpg",
      title: "Quantities",
      price: 1000,
      length: 3
    },
    {
      imgUrl: "image7.jpg",
      title: "Quantities",
      price: 1000,
      length: 3
    }
  ];

  return (
    <section>
      <h1>Elite Edge Fitness Plan</h1>

      <div className='flex '>
        {
          pricing.map((element) => (
            <div key={element.title}>
              <img src={element.imgUrl} alt={element.title} className='p-2' />
              <div>
                <h2>{element.title}</h2>
                <h3>${element.price}</h3>  {/* Display the price correctly */}
                <p>For {element.length} months</p>
              </div>
              <div>
                <p>Additional details can go here.</p>  {/* You can add more details if necessary */}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Pricing;